import React, { Component } from 'react'
import UserCard from '../components/UserCard';

export default class Users extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: [],
            hasBeenUpdated: false
        }
    }

    componentDidMount(){
        fetch('https://kekambas-bs.herokuapp.com/api/users')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    users: data
                })
            }
        )
    }

    componentDidUpdate(prevProps, prevState){
        console.log('UPDATE')
        if (prevState.hasBeenUpdated !== this.state.hasBeenUpdated){

            fetch('https://kekambas-bs.herokuapp.com/api/users')
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    this.setState({
                        users: data
                    })
                }
            )
        }
    }

    usersHaveBeenUpdated = () =>{
        this.setState({
            hasBeenUpdated: !this.state.hasBeenUpdated
        })
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>Users</h1>
                <ul className='list-group'>
                    {this.state.users.map((user, idx) => <UserCard key={idx} user={user} userId={this.props.userId} updateUser={this.usersHaveBeenUpdated}/>)}
                </ul>
            </div>
        )
    }
}
