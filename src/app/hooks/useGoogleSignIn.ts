import { AuthProvider } from 'app/consts'
import { fetchUserDataByGoogleCreds } from 'app/services/auth'
import { Tokens, useAuthStore } from 'app/store'
import { Session } from 'next-auth'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react'

export const useGoogleSignIn = () => {
  const { data: session } = useSession()

  const setTokens = useAuthStore((state) => state.setTokens)
  const accessToken = useAuthStore((state) => state.accessToken)

  const { accessToken: googleAccessToken, provider } = session as Session ?? {}

  useEffect(() => {
    console.log('use_effect')
    if (provider === AuthProvider.Google && googleAccessToken && !accessToken) {
      const getAndSaveUserData = async () => {
        try {
          const { data } = await fetchUserDataByGoogleCreds(googleAccessToken)

          setTokens(data as Tokens)
        } catch (e) {
          console.error(e)
        }
      }

      getAndSaveUserData()
    }
  }, [googleAccessToken, setTokens, accessToken, provider])

  const handleGoogleLoginButtonClick = async () => {
    if (session) {
      await signOut()
    }

    await signIn(AuthProvider.Google)
  }

  return { handleGoogleLoginButtonClick }
}
