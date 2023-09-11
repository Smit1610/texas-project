import React, { useState, useEffect, useRef } from "react";
import './Feed.css';
import Post from './Post';
import CreatePost from "./CreatePost";
import db from '../firebase';
import { collection, getDocs, orderBy, query, startAfter, limit } from "firebase/firestore";

function Feed() {
    const [posts, setPosts] = useState([]);
    const [lastDoc, setLastDoc] = useState(null);
    const [loading, setLoading] = useState(false);
    const containerRef = useRef(null);

    const fetchPosts = async () => {
        setLoading(true);

        var postsQuery = query(
            collection(db, 'posts'), 
            orderBy('timestamp', 'desc'),
            limit(5)
        );

        if (lastDoc) {
            postsQuery = query(
                collection(db, 'posts'), 
                orderBy('timestamp', 'desc'),
                limit(5),
                startAfter(lastDoc)
            );
        }

        try {
            const querySnapshot = await getDocs(postsQuery);

            const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
            }));

            // Create a new array to temporarily store the posts
            const tempPosts = [...posts, ...newData];

            // Set the temporary posts array as the new posts state
            setPosts(tempPosts);

            // Update the lastDoc cursor
            if (querySnapshot.docs.length > 0) {
                setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
            }
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);
   
    const handleScroll = () => {
        const container = document.querySelector(".postColumn");
        if (container) {
             // Calculate the distance between the current scroll position and the bottom of the page
            const scrollY = window.scrollY; // Current scroll position
            const windowHeight = window.innerHeight; // Height of the visible window
            const documentHeight = document.documentElement.scrollHeight; // Total height of the document

            // Calculate the threshold for considering the user at the bottom
            const scrollThreshold = documentHeight - windowHeight;

            if (scrollY >= scrollThreshold) {
                console.log('scrolled to bottom');
                fetchPosts();
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [loading, lastDoc]);

    const handlePostCreated = (postId) => {
        // could fetch new post by id, but for now will just fetch all posts
        fetchPosts();
    }

    return (
        <div className="feed">
            <div className="postColumn">
                <CreatePost onPostCreated={handlePostCreated} />
                
                {posts.map(post => (
                    <Post 
                        author={post.author}
                        content={post.content}
                        title={post.title}
                    />
                ))}

                {loading && <p>Loading...</p>}
            </div>
        </div>
    );
}

export default Feed;