export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'POST'
  | 'delete'
  | 'DELETE'
  | 'put'
  | 'PUT'
  | 'options'
  | 'OPTIONS'
  | 'head'
  | 'Head'
  | 'patch'
  | 'PATCH'

export interface axiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}

export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: axiosRequestConfig
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponse> {}

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: axiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
}
