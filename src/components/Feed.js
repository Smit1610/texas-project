import React, { useState, useEffect } from "react";
import './Feed.css';
import Post from './Post';
import CreatePost from "./CreatePost";
import db from '../firebase';
import { collection, getDocs, orderBy, query } from "firebase/firestore";

function Feed() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const postsQuery = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));

        try {
            const querySnapshot = await getDocs(postsQuery);

            const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            }));

            setPosts(newData);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="feed">
            <div className="postColumn">
                <CreatePost />
                
                {posts.map(post => (
                    <Post 
                        author={post.author}
                        content={post.content}
                        title={post.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Feed;