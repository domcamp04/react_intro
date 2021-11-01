import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { LoggedInNav } from './LoggedInNav';
import { LoggedOutNav } from './LoggedOutNav'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {this.props.loggedIn ? <LoggedInNav /> : <LoggedOutNav />}
                    </ul>
                    { this.props.loggedIn ?  
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to='/' onClick={this.props.logOut}>Logout</Link>
                        </li>
                    </ul>: 
                    null}
                   
                    </div>
                </div>
            </nav>
        )
    }
}
