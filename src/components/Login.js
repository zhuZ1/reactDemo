import React from 'react'
import { Redirect } from 'react-router-dom'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: false
        }
    }
    submit =(e)=>{
        e.preventDefault()
        this.setState({
            open: !this.state.open
        })


    }
    render(){

        if(this.state.open){
            return <Redirect to={{pathname: '/'}}/>
        }
        return(
            <form onSubmit={this.submit}>
                <input type="text"/>
                <br/>
                <input type="password"/>
                <br/>
                <button type='submit'>登录</button>
            </form>
        )
    }
}

export default Login
