import React, { Component } from 'react'
import Shelf from './Shelf';
import { Link } from 'react-router-dom';

class SearchShelf extends Component {
    render() {
        return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"/>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by tittle or author"/>
                    </div>
                </div>
            </div>
            <div className="search-books-results">
                <Shelf books={this.props.books}/>
            </div>
        </div>
        )
    }
}

export default SearchShelf