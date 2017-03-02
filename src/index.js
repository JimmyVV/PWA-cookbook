import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/createStore'
import AppContainer from './containers/AppContainer'


const MOUNT_NODE = document.getElementById('root')

let render = () => {

  ReactDOM.render(
    <Provider store={store}>
      <AppContainer/>
    </Provider>,
    MOUNT_NODE
  )
};

render()

// 用来进行热替换
// if (__DEV__) {
//   if (module.hot) {
//     // Development render functions
//     const renderApp = render
//     const renderError = (error) => {
//       const RedBox = require('redbox-react').default
//
//       ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
//     }
//
//     // Wrap render in try/catch
//     render = () => {
//       try {
//         renderApp()
//       } catch (error) {
//         console.error(error)
//         renderError(error)
//       }
//     }
//
//     // Setup hot module replacement
//     module.hot.accept('./routes/index', () =>
//       setImmediate(() => {
//         ReactDOM.unmountComponentAtNode(MOUNT_NODE)
//         render()
//       })
//     )
//   }
// }


