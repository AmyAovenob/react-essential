import React, { Component } from 'react';
import './PostForms.css';
import axios from 'axios'

const BASE_URL = 'http://jsonplaceholder.typicode.com'


const intState = {
    name: '',
    email: '',
    password: '',
    bio: '',
    country: '',
    gender: '',
    skills: [],
    title: '',
    body: '',
    userId: 111,
    isSubmited: false,
    error: false
}

class PostForms extends Component {

    constructor() {
        super()
        this.myForm = React.createRef()
    }

    state = {
        ...intState
    }

    changeHandelar = e => {
        if (e.target.type === 'checkbox') {
            if (e.target.checked) {
                this.setState({
                    ...this.state,
                    skills: this.state.skills.concat(e.target.value)
                })
            } else {
                this.setState({
                    ...this.state,
                    skills: this.state.skills.filter(skill => skill !== e.target.value)
                })
            }
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    submitHandelar = e => {
        e.preventDefault()
        console.log(this.state)
        this.myForm.current.reset()
        this.setState({
            ...intState
        })
        axios.post(`${BASE_URL}/posts`, {
            userId: this.state.userId,
            title: this.state.title,
            body: this.state.body
        })
            .then(res => {
                this.setState({
                    isSubmited: true,
                    error: false
                })
                console.log(res);
            })
            .catch( error => {
                this.setState({
                    error: true,
                    isSubmited: false
                })
            })
    }

    render() {
        return (
            <form className="mt-4" ref={ this.myForm } onSubmit={ this.submitHandelar }>
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="name">Enter Your Full Name</label>
                        <input 
                            className="form-control" 
                            id="name" 
                            type="text" 
                            placeholder="Enter Your Name" 
                            name="name" 
                            value={ this.state.name } 
                            onChange={ this.changeHandelar }
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="email">Enter Your Email</label>
                        <input 
                            className="form-control" 
                            id="email" 
                            type="email" 
                            placeholder="Enter Your Email" 
                            name="email" 
                            value={ this.state.email } 
                            onChange={ this.changeHandelar }
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="password">Enter Your Password</label>
                        <input 
                            className="form-control" 
                            id="password" 
                            type="password" 
                            placeholder="Enter Your Password" 
                            name="password" 
                            value={ this.state.password } 
                            onChange={ this.changeHandelar }
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="country">Select Your Country</label>
                        <select onChange={ this.changeHandelar } className="form-control" name="country" id="country">
                            <option>Select Your Country</option>
                            <option value="Country 1">Country 1</option>
                            <option value="Country 2">Country 2</option>
                            <option value="Country 3">Country 3</option>
                            <option value="Country 4">Country 4</option>
                            <option value="Country 5">Country 5</option>
                        </select>
                    </div>
                    <div className="col-sm-6 form-group">
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input onChange={ this.changeHandelar } type="radio" className="form-check-input" name="gender" id="gender1" value="Male" /> Male
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input onChange={ this.changeHandelar } type="radio" className="form-check-input" name="gender" id="gender2" value="Female" /> Female
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input onChange={ this.changeHandelar } type="radio" className="form-check-input" name="gender" id="gender3" value="Other" /> Other
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 form-group">
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input onChange={ this.changeHandelar } type="checkbox" className="form-check-input" name="skills" id="js" value="JavaScript" /> JavaScript
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input onChange={ this.changeHandelar } type="checkbox" className="form-check-input" name="skills" id="react" value="React" /> React js
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input onChange={ this.changeHandelar } type="checkbox" className="form-check-input" name="skills" id="angular" value="Angular" /> Angular
                            </label>
                        </div>
                        <div className="form-check-inline">
                            <label className="form-check-label">
                                <input onChange={ this.changeHandelar } type="checkbox" className="form-check-input" name="skills" id="java" value="Java" /> Java
                            </label>
                        </div>
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="title">Enter Your Subject</label>
                        <input 
                            className="form-control" 
                            id="title" 
                            type="text" 
                            placeholder="Enter Your Subject" 
                            name="title" 
                            value={ this.state.title } 
                            onChange={ this.changeHandelar }
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="body">Enter Your Key Text</label>
                        <textarea 
                            className="form-control" 
                            id="body" 
                            type="text" 
                            placeholder="Enter Your Key Text" 
                            name="body" 
                            rows="2" 
                            value={ this.state.body } 
                            onChange={ this.changeHandelar }
                        ></textarea >
                    </div>
                    <div className="col-sm-12 form-group">
                        <label htmlFor="bio">Enter Your BIO</label>
                        <textarea 
                            className="form-control" 
                            id="bio" 
                            type="text" 
                            placeholder="Enter Your BIO" 
                            name="bio" 
                            rows="5" 
                            value={ this.state.bio } 
                            onChange={ this.changeHandelar }
                        ></textarea >
                    </div>
                    <div className="col-sm-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>

                { this.state.isSubmited && <p>From Submited Is Successfully.</p> }
                { this.state.error && <p>Somthing Error Occured.</p> }

            </form>
        )
    }
}


export default PostForms