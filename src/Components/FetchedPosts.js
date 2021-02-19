import React from 'react'
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";
import {Loader} from "./Loader";

export default () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const posts = useSelector(state => state.posts.fetchedPosts)
    if (loading){
        return <Loader/>
    }
    if (!posts.length)
        return <button className='btn btn-primary'
                       onClick={() => dispatch(fetchPosts())}
        >Постів немає</button>
    return posts.map(post => <Post key={post.id} post={post}/>)
}
