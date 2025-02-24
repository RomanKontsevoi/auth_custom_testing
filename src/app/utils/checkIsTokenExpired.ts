export const checkIsTokenExpired = (token: string): boolean => {
  try {
    const payloadBase64 = token.split('.')[1];
    const payloadJson = atob(payloadBase64);
    const payload = JSON.parse(payloadJson);

    if (!payload.exp) {
      console.error('No exp field in the token');
      return true;
    }

    const currentTime = Math.floor(Date.now() / 1000);

    return currentTime >= payload.exp;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
}
