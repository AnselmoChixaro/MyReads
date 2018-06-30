import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf';
import { Link, Route } from 'react-router-dom';
import SearchShelf from './SearchShelf';

class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div>
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>
            <div>
              <Shelf books={this.state.books.filter( book => book.shelf === 'currentlyReading')} title="Currently Reading" />
              <Shelf books={this.state.books.filter( book => book.shelf === 'wantToRead')} title="Want to Read" />
              <Shelf books={this.state.books.filter( book => book.shelf === 'read')} title="Read" />
            </div>
            <div className="open-search">
                <Link to="/search"
                      ></Link>
            </div>
          </div>  
        )}/>
        <Route path="/search" component={ ()=> <SearchShelf books={this.state.books}/>} />
      </div>
    )
  }
}

export default BooksApp
