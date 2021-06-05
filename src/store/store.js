import {createStore} from "redux";

import usersReducers from "../reducers/usersReducers";

const store = createStore(usersReducers)

export default store;