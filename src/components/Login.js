import React from 'react'
import Auth from '../Auth'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    state = {
        redirect: false
    }

    login = () => {
        Auth.logIn(() => {
            this.setState({redirect: true})
        })
    }

    render() {
        if (Auth.isLogin) return <Redirect to='/' />
        let {from} = this.props.location.state || {from: {pathname: '/'}}
        if (this.state.redirect) return <Redirect to={from} />

        return(
            <div>
                <h1>PLEASE LOG IN</h1>
                <button onClick={this.login}>Log In</button>
            </div>
        )

    }

}

export default Login