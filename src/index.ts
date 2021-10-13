import { transformResponse, transfromRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'
import { buildURL } from './helpers/url'
import { AxiosPromise, axiosRequestConfig } from './types'
import xhr from './xhr'
function axios(config: axiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then((res) => {
    res.data = transformResponse(res.data)
    return res 
  })
}

function processConfig(config: axiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transfromHeaders(config)
  config.data = transfromRequestData(config)
}

function transformURL(config: axiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url, params)
}

function transfromRequestData(config: axiosRequestConfig): any {
  const { data } = config
  return transfromRequest(data)
}

function transfromHeaders(config: axiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios
