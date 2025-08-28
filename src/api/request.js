const request = async (url) => {
  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      console.log('응답 성공')
      return data
    } else {
      console.log('응답 실패')
    }
  } catch (e) {
    console.log(e)
  }
}

export default request
