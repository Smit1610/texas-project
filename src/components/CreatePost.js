import React, { useState } from "react";
import './CreatePost.css';

function CreatePost() {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        // Call function to post to database

        // Clear the input fields
        setTitle('');
        setContent('');
    };

    return (
        <div className="create-post">
            <h2>Create a Post</h2>
            <input 
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="post-input"
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="post-input"
            />
            <button onClick={handleSubmit} className="post-button">
                Post
            </button>
        </div>
    );
}

export default CreatePost;