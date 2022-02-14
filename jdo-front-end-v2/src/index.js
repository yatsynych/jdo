import React from 'react'
import {render} from 'react-dom'
import {compose, createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {rootReducer} from './redux/reducers/rootReducer'
import {rootSagaWatcher} from './redux/rootSagaWatcher'
import './index.css'
import App from './App'

const saga = createSagaMiddleware()

const store = createStore(
  rootReducer,
  compose(
  applyMiddleware(
    saga
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(rootSagaWatcher)

const rootElement = document.getElementById("root");

render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    rootElement
)