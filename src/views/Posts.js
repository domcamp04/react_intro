import React, {useState, useEffect} from "react";
import { PostCard } from "../components/PostCard";


export const Posts = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        console.log('Effect called')
        fetch('https://kekambas-bs.herokuapp.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h1>This is the Posts Page</h1>
            {posts.map(p => <PostCard key={p.id} post={p} />)}
        </div>
        
    )
    
}