import React, { Component } from 'react'

import Book from './Book/Book'

class Books extends Component {
  render() {
    return (
      <div>
        { this.props.books.map(book => {
            return (
                <Book key={ book.id }
                    changeHandler={ this.props.changeHandler } 
                    deleteHandler={ this.props.deleteHandler } 
                    book={ book } 
                />
            )
        }) }
      </div>
    )
  }
}

export default Books;