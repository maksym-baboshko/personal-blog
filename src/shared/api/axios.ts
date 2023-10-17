import axios from 'axios'

import { LS_JWT_KEY } from '@shared/constants/localStorage'

export const $api = axios.create({ baseURL: __API__ })

$api.interceptors.request.use((config) => {
  const token = localStorage.getItem(LS_JWT_KEY)

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
