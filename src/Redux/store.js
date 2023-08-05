import React from 'react'
import { createStore,combineReducers } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/reducer'
import selectedData from './reducers/selectedReducer'
const rootReducer = combineReducers({
    reducer:reducer,
    selectedData:selectedData
})
const store = createStore(rootReducer,applyMiddleware(thunk)) ;

export default store ;