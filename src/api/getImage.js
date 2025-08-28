import React from 'react'
import request from './request'

const BASE_URL = 'https://pixabay.com/api'

const defaultParam = {
  key: import.meta.env.VITE_PIXABAY,
}

const getImage = async (paramObj) => {
  const params = new URLSearchParams({
    ...defaultParam,
    ...paramObj,
  }).toString()
  const result = await request(`${BASE_URL}/?${params}`)
  return result
}

export default getImage
