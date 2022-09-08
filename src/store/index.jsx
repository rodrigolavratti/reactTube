import { createStore, applyMiddleware, compose } from 'redux'
import thank from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducers'

const composeEmhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [thank, logger]

const store = createStore(reducers, composeEmhancers(
    applyMiddleware(...middlewares)
))

export default store