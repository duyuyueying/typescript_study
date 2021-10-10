import { axiosRequestConfig } from './types'

export default function xhr(config: axiosRequestConfig): void {
  const { data = null, url, method = 'get', headers } = config
  const request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  Object.keys(headers).forEach((name) => {
    // data为null的时候设置content-type是没有意义的，所以可以不用设置
    if(data === null && name.toLowerCase() == 'content-type'){
      delete headers[name]
    } else{
      request.setRequestHeader(name, headers[name])
    }
  })
  request.send(data)
}
