// 存放纯函数 用来更改我们的状态
import { handleActions } from 'redux-actions'
// handleActions 方法用来创建actions 将多个相关的reducer 写在一起也是 方便后期维护
// 方便后期通过dispatch 来调用更改state俩面的状态 主要接收两个参数 一个是参数时候的大对象 里面存放多个reducer 第二个参数是初始化的时候state的状态值
import { INCREMENT, DECREMENT, ASYNC_INCREMENT, WANG_NAN_PING } from '../types/counter'

export default handleActions({
  [INCREMENT] (state) {
    return {
      ...state,
      num: state.num + 1
    }
  },
  [DECREMENT] (state) {
    return {
      ...state,
      num: state.num - 1
    }
  },
  [WANG_NAN_PING] (state) {
    return {
      ...state,
      wang: state.wang + 1
    }
  },
  [ASYNC_INCREMENT] (state, action) {
    return {
      ...state,
      asyncNum: state.asyncNum + action.payload  /// 通过action.payload 的值来对asyncNum 的值进行异步操作
    }
  }
}, {
  num: 0,
  wang: 0,
  asyncNum: 0
})
