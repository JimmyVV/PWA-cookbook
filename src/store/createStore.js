import { applyMiddleware, createStore } from 'redux'
import makeRootReducer from './reducers'

export default (initialState = {}) => {
  const middleware = [];

  const store = createStore(
    makeRootReducer(),
    initialState,
    applyMiddleware(...middleware)
  )

  return store;
}
