import React from 'react';
import { Link } from 'react-router-dom';


export const PostCard = (props) =>{
    const post = props.post
    const dateCreated = new Date(post.date_created)
    const fullName = post.user.first_name + ' ' + post.user.last_name
    return (
        <div key={post.id} className="card my-3">
            <div className="card-header">
                <Link to={`/posts/${post.id}`}>
                    {post.title}
                </Link>
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                <p>{post.body}</p>
                <footer className="blockquote-footer">{fullName} <cite title="Source Title">{dateCreated.toLocaleString()}</cite></footer>
                </blockquote>
            </div>
        </div>
    )
}