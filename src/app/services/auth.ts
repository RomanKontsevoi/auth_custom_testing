import { useLoadingStore } from 'app/store/loadings'

export const fetchUserDataByGoogleCreds = async (googleAccessToken: string) => {
  const {setIsLoginLoading} = useLoadingStore.getState()

  try {
    setIsLoginLoading(true)

    const res = await fetch(`${process.env.NEXT_PUBLIC_AAM_BACKEND_URL}/auth/custom/login/google`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${googleAccessToken}`
      }
    })
    return await res.json()
  } catch (e) {
    console.error(e)
  } finally {
    setIsLoginLoading(false)
  }
}

export const requestOtpMobile = async (mobile: string) => {
  const {setIsRequestOTPLoading} = useLoadingStore.getState()

  try {
    setIsRequestOTPLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_AAM_BACKEND_URL}/auth/otp/request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mobile})
    })
    return await res.json()
  } catch (e) {
    console.error(e)
  } finally {
    setIsRequestOTPLoading(false);
  }
}

interface LoginByMobileOptions {
  mobile: string
  otp: number
  otp_start_time: string
}

export const loginByMobile = async (options: LoginByMobileOptions) => {
  const {setIsLoginLoading} = useLoadingStore.getState()

  try {
    setIsLoginLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_AAM_BACKEND_URL}/auth/custom/login/mobile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    });

    return await res.json();
  } catch (e) {
    console.error(e);
  } finally {
    setIsLoginLoading(false);
  }
};
