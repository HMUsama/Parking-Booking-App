import { combineReducers } from 'redux'
import {firebaseReducer}   from 'react-redux-firebase'
import {firestoreReducer}  from 'redux-firestore'
import authReducesUser from './authReducerUR'

const rootReducers  = combineReducers({

    authUR:      authReducesUser,

    firebase:     firebaseReducer,
    firestore:    firestoreReducer
});

export default rootReducers;