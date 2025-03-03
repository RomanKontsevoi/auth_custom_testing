const baseUrl = process.env.NEXT_PUBLIC_AAM_BACKEND_URL

console.log({ baseUrl })

export const fetchUserDataByGoogleCreds = async (googleAccessToken: string) => {
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

export const requestOtpMobile = async (mobile: string) => {
  try {
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
  }
}

interface LoginByMobileOptions {
  mobile: string
  otp: number
  otp_start_time: string
}

export const loginByMobile = async (options: LoginByMobileOptions) => {
  try {
    console.log('requestOtpMobile')
    const res = await fetch(`${process.env.NEXT_PUBLIC_AAM_BACKEND_URL}/auth/custom/login/mobile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options)
    })
    return await res.json()
  } catch (e) {
    console.error(e)
  }
}
