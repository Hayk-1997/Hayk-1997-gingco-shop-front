export const catchApiError = (e: any) => {
  if (e?.response?.data) {
    return !Array.isArray(e?.response?.data.message) ? [e?.response?.data.message] : e?.response?.data.message
  }

  return []
}
