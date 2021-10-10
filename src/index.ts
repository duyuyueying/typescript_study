import { transfromRequest } from './helpers/data';
import { processHeaders } from './helpers/headers';
import { buildURL } from './helpers/url';
import { axiosRequestConfig } from './types'
import xhr from './xhr'
function axios(config: axiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: axiosRequestConfig) : void{
  config.url = transformURL(config)
  config.headers = transfromHeaders(config)
  config.data = transfromRequestData(config)
}

function transformURL(config: axiosRequestConfig): string{
  const {url, params} = config;
  return buildURL(url, params)
}

function transfromRequestData(config: axiosRequestConfig): any{
  const {data} = config;
  return transfromRequest(data)
}

function transfromHeaders(config: axiosRequestConfig): any{
  const {headers = {}, data} = config
  return processHeaders(headers, data)
}

export default axios
