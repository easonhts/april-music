import axios from 'axios';

export const baseUrl = '';

const instance = axios.create({
  baseURL: baseUrl,
})

instance.defaults.timeout = 2000;

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

instance.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = token
    return config
  },
  err => Promise.reject(err)
)

instance.interceptors.response.use(
  // 可以单独处理非200的code码
  (config) => config,
  // code处理
  (err) => Promise.reject(err)
)

// get 请求
export function httpGet ({
  url,
  params = {}
}) {
  return instance.get(url, {
    params
  })
}

// post请求
export function httpPost ({
  url,
  data = {},
  params = {}
}) {
  return instance({
    url,
    method: 'post',
    transformRequest: [function (data) {
      let ret = ''
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
      }
      return ret
    }],
    // 发送的数据
    data,
    // url参数
    params

  })
}
