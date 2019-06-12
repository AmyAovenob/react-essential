import React, { Component } from 'react';
import axios from 'axios';


class Posts extends Component {
    
    state = {
        posts: []
    }

    componentDidMount() {
      axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({
                    posts: response.data
                })
            })
            .catch(error => {
                return <h1 className="text-center">There is an { error }</h1>
            })
    }
    
    render() {
        if (this.state.posts.length === 0) {
            return <h1 className="text-center">Loading...</h1>
        } else {
            return(
                <div className="">
                    {/* <ul className="list-group">
                        {this.state.posts.map(post => <li key={ post.id } className="list-group-item">{ post.title }</li>)}
                    </ul> */}
                    <table className="table table-dark table-hover mt-4">
                        <thead>
                            <tr>
                                <th style={{ width: '12%' }}>User Id</th>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.posts.map(post => {
                                return(
                                    <tr key={ post.id }>
                                        <td>{ post.userId }</td>
                                        <td>{ post.id }</td>
                                        <td>{ post.title }</td>
                                        <td>{ post.body }</td>
                                    </tr>
                                )
                            }) }
                        </tbody>
                    </table>
                </div>
            )
        }
    }
}

export default Posts