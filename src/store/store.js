import {createStore, compose, applyMiddleware } from "redux";
import usersReducers from "../reducers/usersReducers";
import {getFirebase, reduxReactFirebase} from 'react-redux-firebase'
import {getFireStore, reduxFirestore} from 'redux-firestore'
import firebase from '../firebase/config'

import thunk from 'redux-thunk'
const store = createStore(usersReducers, compose(
  applyMiddleware(thunk.withExtraArgument({getFirebase, getFireStore})),
  reduxReactFirebase(firebase),
  reduxFirestore(firebase)
));

export default store;