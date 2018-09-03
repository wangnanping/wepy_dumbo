// 对数据进行一系列处理
import { ASYNC_INCREMENT } from '../types/counter'
import { createAction } from 'redux-actions'
// createAction 创建一个action 主要有两个参数
// 第一个type 便是action的类型
// 第二个payloadCreator 是一个function 处理并返回参数的payload 如果空缺就会使用默认方法
export const asyncInc = createAction(ASYNC_INCREMENT, () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(1)
    }, 1000)
  })
})
