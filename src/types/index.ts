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

export interface AxiosResponse<T=any> {
  data: T
  status: number
  statusText: string
  headers: any
  config: axiosRequestConfig
  request: any
}

export interface AxiosPromise<T=any> extends Promise<AxiosResponse<T>> {}

export interface AxiosError extends Error {
  isAxiosError: boolean
  config: axiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse
}

export interface Axios{
  request<T=any>(config: axiosRequestConfig): AxiosPromise<T>
  get<T=any>(url: string, config?: axiosRequestConfig): AxiosPromise<T>
  delete<T=any>(url: string, config?: axiosRequestConfig): AxiosPromise<T>
  head<T=any>(url: string, config?: axiosRequestConfig): AxiosPromise<T>
  options<T=any>(url: string, config?: axiosRequestConfig): AxiosPromise<T>
  post<T=any>(url: string, data?:any, config?:axiosRequestConfig) : AxiosPromise<T>
  put<T=any>(url: string, data?:any, config?:axiosRequestConfig) : AxiosPromise<T>
  patch<T=any>(url: string, data?:any, config?:axiosRequestConfig) : AxiosPromise<T>
}

export interface AxiosInstance extends Axios{
  <T=any>(config: axiosRequestConfig): AxiosPromise<T>
  <T=any>(url: string, config?: axiosRequestConfig) : AxiosPromise<T>
}
