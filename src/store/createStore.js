import { applyMiddleware, createStore } from 'redux'
import Reducers from './reducers'

const initialState = window.___INITIAL_STATE__


export default createStore(
  Reducers(),
  initialState
)
