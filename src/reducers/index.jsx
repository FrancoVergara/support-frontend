import { combineReducers } from "redux"

import authReducer from "./authReducer"
import newsReducer from "./newsReducer"
import categoriesReducer from "./categoriesReducer"
import problemsReducer from "./problemsReducer"
import solutionsReducer from "./solutionsReducer"

export default combineReducers({
    auth: authReducer,
    news: newsReducer,
    categories: categoriesReducer,
    problems: problemsReducer,
    solutions: solutionsReducer
})