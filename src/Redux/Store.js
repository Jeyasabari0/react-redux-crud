import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { Reducer } from './Reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const combineReducer = combineReducers({ user: Reducer })
export const Store = configureStore({ reducer: combineReducer, middleware: [thunk, logger] })