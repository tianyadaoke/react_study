import {createStore,applyMiddleware,combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
//支持异步
import thunk from 'redux-thunk'

const allReducers=combineReducers({
  persons:personReducer,
  sum:countReducer,
})
export default createStore(allReducers,applyMiddleware(thunk))