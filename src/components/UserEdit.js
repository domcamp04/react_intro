import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class UserEdit extends Component {
    constructor(props){
        super(props);
        this.state = {redirect: false}
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
        myHeaders.append('Content-Type', 'application/json');

        let formData = {
            username: username,
            email: email
        }
        if (password){
            formData.password = password
        }
        let body = JSON.stringify(formData);

        fetch(`http://localhost:5000/api/users/${this.props.user.id}`,{
            method: 'PUT',
            headers: myHeaders,
            body: body
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                this.props.updateUser()
                this.setState({redirect: true})
            })
    }

    deleteUser = () =>{
        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${localStorage.getItem('token')}`)

        fetch(`http://localhost:5000/api/users/${this.props.user.id}`,{
            method: 'DELETE',
            headers: myHeaders
        }).then(res => {
            if(res.status === 204){
                this.props.updateUser()
                this.setState({
                    redirect:true
                })
            }
        }).catch(err => console.error(err))
    }

    render() {
        const user = this.props.user
        return this.state.redirect ? <Redirect to='/users' /> :(
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h6 className='text-center'>Edit User: {user.username}</h6>
                    <div className='form-group'>
                        <fieldset>
                            <label htmlFor='username'>Username</label>
                            <input type='text' className='form-control' name='username' defaultValue={user.username}/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='email'>Email</label>
                            <input type='text' className='form-control' name='email' defaultValue={user.email}/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor='password'>Password</label>
                            <input type='password' className='form-control' name='password' />
                        </fieldset>
                        <input type='submit' className='btn btn-dark' value='Update User' />
                    </div>
                </form>
                <button className='btn btn-danger' onClick={this.deleteUser}>Delete User</button>
            </div>
        )
    }
}
