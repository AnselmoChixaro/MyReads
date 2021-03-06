import React from 'react'

function BookDisplayer (props) {
    return (
     <div className="book">
        <div className="book-top">
            <div className="book-cover" style={{
                width:128,
                height:193,
                backgroundImage:`url(${props.book.imageLinks.thumbnail})`
            }}>
                <div className="book-shelf-changer">
                    <select>
                        <option value="move">Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="None">None</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
     </div>   
    )
}

export default BookDisplayer