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
  url?: string
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

export interface Axios{
  request(config: axiosRequestConfig): AxiosPromise
  get(url: string, config?: axiosRequestConfig): AxiosPromise
  delete(url: string, config?: axiosRequestConfig): AxiosPromise
  head(url: string, config?: axiosRequestConfig): AxiosPromise
  options(url: string, config?: axiosRequestConfig): AxiosPromise
  post(url: string, data?:any, config?:axiosRequestConfig) : AxiosPromise
  put(url: string, data?:any, config?:axiosRequestConfig) : AxiosPromise
  patch(url: string, data?:any, config?:axiosRequestConfig) : AxiosPromise
}

export interface AxiosInstance extends Axios{
  (config: axiosRequestConfig): AxiosPromise
}
