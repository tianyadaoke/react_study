import {ADD_PERSON} from '../constant'

export default function personReducer(preState=[{id:1,name:'haha',age:18}],action){
  const {type,data} = action
  switch (type) {
    case ADD_PERSON:
      return [data,...preState]
  
    default:
      return preState
  }
}