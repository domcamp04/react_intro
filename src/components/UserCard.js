import React, { Component } from 'react'
import UserEdit from './UserEdit'

export default class UserCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isEditing: false
        }
    }
    handleClick = () =>{
        const newState = !this.state.isEditing;
        this.setState({
            isEditing: newState
        })
    }
    render() {
        const user = this.props.user
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{user.username}</h5>
                    <p className="card-text">{user.email}</p>
                    {Number(this.props.userId) === user.id ? <button className="btn btn-primary" onClick={this.handleClick}>Edit</button> : null}
                    {this.state.isEditing ? <UserEdit user={user} updateUser={this.props.updateUser}/> : null}
                </div>
            </div>
        )
    }
}
