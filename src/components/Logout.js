import React from 'react'
import Auth from '../Auth'
import { Redirect } from 'react-router-dom'

class Logout extends React.Component {
    state = {
        redirect: false
    }

    componentDidMount() {
      Auth.logOut(() => {
          this.setState({redirect: true})
      })
    }
    

    render() {
        if(this.state.redirect) {
            return <Redirect to='/' />
        } else {
            return <h1>Loging Out Successfully :)</h1>
        }
    }

}

export default Logout