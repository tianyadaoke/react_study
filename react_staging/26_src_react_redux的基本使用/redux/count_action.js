
import {INCREMENT,DECREMENT} from './constant'
// 该文件专门为Count组件生产action对象,
// 同步aciton就是action值为一般对象
export const createIncrementAction = (data) => ({ type: INCREMENT, data })
export const createDecrementAction = (data) => ({ type: DECREMENT, data })
// 异步action就是action值为函数,异步action中一般都会调用同步任务
// 异步action不是必须要用的
export const createIncrementAsyncAction=(data,time)=>{
  return (dispatch)=>{
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time);
  }
}