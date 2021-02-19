import {combineReducers} from "redux";
import {postsReducer} from "./postsReducer";
import {appReducer} from "./AppReducer";

export const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
})
