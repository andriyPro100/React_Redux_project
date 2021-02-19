import React from "react"
import PostForm from "./Components/PostForm";
import Posts from "./Components/Posts";
import FetchedPosts from "./Components/FetchedPosts";

function App() {
    return(
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <PostForm/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Синхронні пости</h2>
                    <Posts />
                </div>
                <div className="col">
                    <h2>Асинхронні пости</h2>
                    <FetchedPosts />
                </div>
            </div>
        </div>
    )
}

export default App;
