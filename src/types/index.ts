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
  headers?:any
}
