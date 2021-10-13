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
// axios({
//     method: 'post',
//     url: '/base/post',
//     data: {
//         a: 1,
//         b: 2
//     }
// })

// const arr = new Int32Array([21,31])
// axios({
//     method: 'post',
//     url: '/base/buffer',
//     data: arr
// })


axios({
    method: 'post',
    url: '/base/post',
    data: {
        a: 1,
        b: 2
    }
}).then((res) => {
    console.log(res)
})

axios({
    method: 'post',
    url: '/base/post',
    responseType: 'json',
    headers: {
        'content-type': 'application/json',
        'Accept': 'application/json, text/plain, */*'
    },
    data: {
        a: 1,
        b: 2
    }
}).then((res) => {
    console.log(res)
})

// const paramsString = 'q=URLUtils.searchParams&topic=api'
// const searchParams = new URLSearchParams(paramsString)

// axios({
//     method: 'post',
//     url: '/base/post',
//     data: searchParams
// }).then((res)=> {
//     console.log(res)
// })

function printLabel(labelledObj: {label: string, size?: number}) {
    console.log(labelledObj.label)
}
let myObj = {
    size: 10,
    label: 'fdafda',
    test: 'innner'
}
printLabel(myObj)

// interface SquareConfig {
//     color?: string;
//     width?: number;
//   }
  
//   function createSquare(config: SquareConfig): {color: string; area: number} {
//     let newSquare = {color: "white", area: 100};
//     if (config.color) {
//       newSquare.color = config.color;
//     }
//     if (config.width) {
//       newSquare.area = config.width * config.width;
//     }
//     return newSquare;
//   }
  
//   let mySquare = createSquare({color: "black", test: 'test'});
//   console.log(mySquare)

// interface ClocConstructor{
//     // 当用构造其签名去定义一个接口并试图定义一个类去实现这个接口会得到一个错误
    
//     new (hour: number, minute: number)
// }
// // error!! 类型“Clock”提供的内容与签名“new (hour: number, minute: number): any”不匹配。
// class Clock implements ClocConstructor{
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

// 这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。

// const clock = new Clock(10, 100)