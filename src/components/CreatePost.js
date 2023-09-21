import React, { useState } from "react";
import './CreatePost.css';
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "../firebase";
import { useUser } from "../contexts/UserContext";

function CreatePost({ onPostCreated }) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const user = useUser();

    const createPost = async (e) => {
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                author: user.email,
                content: content,
                timestamp: Timestamp.now(),
                title: title
            });
            // Call the callback function to notify Feed of the new post
            onPostCreated(docRef.id);
        } catch (e) {
            console.error("Error creating post: ", e);
        }
    }

    const handleSubmit = () => {
        // Call function to post to database
        createPost();

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