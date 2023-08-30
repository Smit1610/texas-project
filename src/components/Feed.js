import React from "react";
import './Feed.css';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <div className="postColumn">
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default Feed;