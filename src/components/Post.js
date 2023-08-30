import React from "react";
import './Post.css';

function Post() {
    return (
        <div className="post">
            <h2 className="post-title">Post title</h2>
            <p className="post-author">Username</p>
            <p className="post-content">Hello everyone, this is my post!</p>
        </div>
    );
}

export default Post;