import { combineReducers } from 'redux' // 通过redux 定义的combineReducers 将所有的reducers 合并成一个整体 方面我们后见对其管理
import counter from './counter'

export default combineReducers({
  counter
})
