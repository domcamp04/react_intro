import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import { PostDetail } from './components/PostDetail';
import About from './views/About';
import Home from './views/Home';
import { Login } from './views/Login';
import { Posts } from './views/Posts';
import Racers from './views/Racers';
import Register from './views/Register';
import Users from './views/Users';

export default class App extends Component {
  constructor(props){
    super(props);
    console.log('Constructed!')
    this.state = {
      count: 0,
      name: 'Dominick',
      loggedIn: localStorage.getItem('token'),
      userId: localStorage.getItem('userId')
    };
  };

  handleClick = (step) => {
    let newCount = this.state.count + step
    this.setState({
        count: newCount
    })
  }

  changeName = (name) => {
    //   const name = prompt('What is your name?');
      this.setState({
          name
      })
  }

  logOut = () =>{
    localStorage.removeItem('token');
    this.setState({
      loggedIn: null
    })
  }

  logIn = (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;
    let encodedString = btoa(`${username}:${password}`)
    let myHeaders = new Headers();
    myHeaders.append('Authorization', `Basic ${encodedString}`)
    
    fetch('https://kekambas-bs.herokuapp.com/api/token', {
        method: 'POST',
        headers: myHeaders
    }).then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data['token'])
            localStorage.setItem('userId', data['user_id'])
            this.setState({
              loggedIn: data['token'],
              userId: data['user_id']
            })
        })
        .catch(err => console.error(err))
  }

  render() {
    return (
      <>
        <Navbar loggedIn={this.state.loggedIn} logOut={this.logOut}/>
        <div className='container'>
            <Route exact path='/'>
                <Home count={this.state.count} handleClick={this.handleClick} name={this.state.name} changeName={this.changeName}/>
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path='/racers'>
                <Racers />
            </Route>
            <Route exact path='/users'>
                <Users userId={this.state.userId}/>
            </Route>
            <Route exact path='/posts'>
                <Posts />
            </Route>
            <Route exact path='/register'>
                <Register />
            </Route>
            <Route exact path='/login'>
                <Login handleSubmit={this.logIn} loggedIn={this.state.loggedIn}/>
            </Route>

            <Route exact path='/posts/:id' component={PostDetail}></Route>

        </div>
      </>
    )
  }
}
