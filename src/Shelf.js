import React from 'react'
import PropTypes from 'prop-types'
import BookDisplayer from './BookDisplayer';

function Shelf (props) {
    return(
        <div className='bookshelf'>
            <div className='shelf-title'>
                <h2 className="bookshelf-title">{props.title}</h2>
            </div>
            <div className='bookshelf-books'>
                <ol className='books-grid'> 
                    {props.books.map((book) =>(
                        <li key={book.id}>
                            <BookDisplayer book={book}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

Shelf.protoTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}

export default Shelf