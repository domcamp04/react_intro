import React, { Component } from 'react'

export default class Button extends Component {
    // constructor(props){
    //     console.log('Component Constructed')
    //     super(props)
    //     this.state = {
    //         count: 0
    //     }
    // }

    // handleClick = () => {
    //     let newCount = this.state.count + 1
    //     this.setState({
    //         count: newCount
    //     })
    // }


    render() {
        return (
            <div>
                <button className='btn btn-primary' onClick={() => this.props.incrementCount(this.props.step)}>+{this.props.step}</button>
            </div>
        )
    }
}
