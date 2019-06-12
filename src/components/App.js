import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Books from './Books/Books'
import PostForms from './Forms/PostForms'
import Posts from './Posts/posts'

import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Test from './Test'
import Mobile from "./Mobile";

import PrivateRoute from '../PrivateRoute'
import Login from './Login'
import Logout from './Logout'

class App extends Component {

    state = {
        books: [
            {
                id: 1,
                name: 'JavaScript',
                price: 20
            },
            {
                id: 2,
                name: 'React',
                price: 30
            },
            {
                id: 3,
                name: 'Angular',
                price: 35
            },
            {
                id: 4,
                name: 'PHP',
                price: 40
            },
        ]

    }
    
    deleteHandler = (id) => {
        let newBooks = this.state.books.filter(book => book.id !== id)
        this.setState({
            books: newBooks
        })
    }

    changeHandler = (name, id) => {
        let newBooks = this.state.books.map(book => {
            if (id === book.id) {
                return {
                    ...book,
                    name
                }
            }

            return book
        })

        this.setState({
            books: newBooks
        })
        
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav />
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Switch>
                                    <Route path='/' exact render={() => {
                                        return <Home name='And Render Home Component Data For Index Page' />
                                    }} />
                                    
                                    <Route path='/home' component={ Home } />

                                    <Route path='/about' component={ About } />

                                    <Route path='/contact' component={ Contact } />

                                    <Route path='/mobile' component={ Mobile } />

                                    <Route path='/books' render={() => {
                                        return <Books 
                                                    changeHandler={ this.changeHandler.bind(this) } 
                                                    deleteHandler={ this.deleteHandler.bind(this) } 
                                                    books={ this.state.books } 
                                                />
                                    }} />

                                    <Route path='/post-forms' component={ PostForms } />

                                    <Route path='/posts' render={() => {
                                        return <Posts posts={ this.state.pos } />
                                    }} />

                                    <PrivateRoute path='/test/:postId' component={ Test } />

                                    <Route path='/login' component={ Login } />

                                    <Route path='/logout' component={ Logout } />

                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

//  TODO List

// Constructor()
// Render()
//  Call All Child Lifecycle Methods
// ComponentDidMount
// ComponentDidUpdate
// ComponentWillUnmount

// Install react-router-dom
// Import BrowsurRouter and From react-router-dom
// wrap app with BrowserRouter as Higher-Order Components
// Creat some route
