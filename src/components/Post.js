import React from "react";
import './Post.css';

function Post({ title, author, content }) {
    return (
        <div className="post">
            <h2 className="post-title">{title}</h2>
            <p className="post-author">{author}</p>
            <p className="post-content">{content}</p>
        </div>
    );
}

export default Post;