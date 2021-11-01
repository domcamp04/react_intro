import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: null
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log('Form Submitted!')

        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json')

        let password = e.target.password.value
        let confirmPass = e.target.confirmPass.value
        if (password !== confirmPass){
            this.setState({
                redirect: '/register'
            })
        }

        let data = JSON.stringify({
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        })

        fetch('https://kekambas-bs.herokuapp.com/api/users',{
            method: 'POST',
            headers: myHeaders,
            body: data
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    redirect: '/users'
                })
            })
            .catch(err => console.error(err))
    }

    render() {
        return (
            this.state.redirect ? <Redirect to={this.state.redirect} /> :
            <form onSubmit={this.handleSubmit}>
                <h3 className='text-center'> Register Here</h3>
                <div className='form-group'>
                    <fieldset>
                        <label htmlFor='username'>Username</label>
                        <input type='text' name='username' className='form-control' placeholder='Username' />
                    </fieldset>
                    <fieldset>
                        <label htmlFor='email'>Email</label>
                        <input type='text' name='email' className='form-control' placeholder='Email' />
                    </fieldset>
                    <fieldset>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name='password' className='form-control' placeholder='Password' />
                    </fieldset>
                    <fieldset>
                        <label htmlFor='confirmPass'>Confirm Password</label>
                        <input type='password' name='confirmPass' className='form-control' placeholder='Confirm Password' />
                    </fieldset>
                    <input type='submit' className='btn btn-secondary' />
                </div>
            </form>
        )
    }
}
