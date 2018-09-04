
//  store 入口文件 初始化redux
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise' // 中间件 方便 action 做一步处理
import rootReducer from './reducers' // 纯函数 用于接受action 和 当前state作为参数 返回一个新的State


export default function configStore () {
  const store = createStore(rootReducer, applyMiddleware(promiseMiddleware))
  return store
}
