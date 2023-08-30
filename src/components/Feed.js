import React from "react";
import './Feed.css';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <div className="postColumn">
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