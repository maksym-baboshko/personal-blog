import axios from 'axios'

import { LS_JWT_KEY } from '@shared/constants/localStorage'

export const $api = axios.create({ baseURL: __API__ })

$api.interceptors.request.use((config) => {
  const jwt = localStorage.getItem(LS_JWT_KEY)

  if (jwt) {
    config.headers.Authorization = `Bearer ${jwt}`
  }

  return config
})
