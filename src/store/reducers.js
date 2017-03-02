import { combineReducers } from 'redux'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    ...asyncReducers
  })
}

function locationReducer(state,action) {
  return state;
}


export default makeRootReducer
