const baseUrl = process.env.NEXT_PUBLIC_AAM_BACKEND_URL

console.log({ baseUrl })

const getUserByGoogle = 'https://localhost:3001/api/v1/auth/custom/login/google'

export const fetchUserData = async (googleAccessToken: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_AAM_BACKEND_URL}/auth/custom/login/google`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${googleAccessToken}`
      }
    })
    return await res.json()
  } catch (e) {
    console.error(e)
  }
}
