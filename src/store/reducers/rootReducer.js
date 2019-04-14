import { combineReducers } from 'redux'
import {firebaseReducer}   from 'react-redux-firebase'
import {firestoreReducer}  from 'redux-firestore'
import authReducesUser from './authReducerUR'
import authReducesAd from './authReducerAd'

const rootReducers  = combineReducers({

    authUR:      authReducesUser,
    authAd:      authReducesAd,

    firebase:     firebaseReducer,
    firestore:    firestoreReducer
});

export default rootReducers;