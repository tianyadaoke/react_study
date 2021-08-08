import {createStore,applyMiddleware} from 'redux'
//引入汇总的reducer
import reducer from './reducers'
//支持异步
import thunk from 'redux-thunk'


export default createStore(reducer,applyMiddleware(thunk))