import {CREATE_POST, FETCH_POSTS, HIDE_LOADER, SHOW_LOADER} from "./types";

export function createPost(post){
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function fetchPosts() {
    return async dispatch => {
        dispatch(showloader())
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        const json = await response.json()
        dispatch({type: FETCH_POSTS, payload: json})
        dispatch(hideloader())
    }
}

export function showloader() {
    return({
        type: SHOW_LOADER
    })
}
export function hideloader() {
    return({
        type: HIDE_LOADER
    })
}
