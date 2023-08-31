import React, { useState, useEffect } from "react";
import './Feed.css';
import Post from './Post';
import CreatePost from "./CreatePost";
import firestore from '../firebase';

function Feed() {
    
    return (
        <div className="feed">
            <div className="postColumn">
                <CreatePost />
                <Post
                    title="Hi buddy"
                    author="Charlie"
                    content="Hey fellas"
                />
                <Post 
                    title="I have gay thoughts?"
                    author="Eric"
                    content="Does anyone else ever feel an urge to bathe with their brother?"
                />
            </div>
        </div>
    );
}

export default Feed;