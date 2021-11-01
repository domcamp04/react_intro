import React from 'react';
import { Link } from 'react-router-dom';

export function LoggedInNav(props){

    return (
        <React.Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/racers">Racers</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/posts">Posts</Link>
            </li>
        </React.Fragment>
    )
}

