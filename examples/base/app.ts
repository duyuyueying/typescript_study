import axios from '../../src/index'

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo:['bar', 'baz']
//     }
// })

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         foo:{
//             bar: 'baz'
//         }
//     }
// })

// const date = new Date()

// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//         date
//     }
// })

// // 参数值包含特殊字符
// axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//       foo: '@:$, '
//     }
//   })
  
//   // 参数值包含null或`undefined`
//   axios({
//     method: 'get',
//     url: '/base/get',
//     params: {
//       foo: 'bar',
//       baz: null
//     }
//   })
  
//   // url 中存在哈希#标记
//   axios({
//     method: 'get',
//     url: '/base/get#hash?bar=baz',
//     params: {
//       foo: 'bar'
//     }
//   })
  
//   // url 中已存在的参数
//   axios({
//     method: 'get',
//     url: '/base/get?foo=bar',
//     params: {
//       bar: 'baz'
//     }
//   })
axios({
    method: 'post',
    url: '/base/post',
    data: {
        a: 1,
        b: 2
    }
})

const arr = new Int32Array([21,31])
axios({
    method: 'post',
    url: '/base/buffer',
    data: arr
})
