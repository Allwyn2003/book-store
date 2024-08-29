import React from 'react'
import { useState, useEffect } from 'react';
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://book-server-o1xw.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(10, 20)))
    })
    return (
        <div>
            <BookCards books={books} headLine="Other Books" />
        </div>
    )
}

export default OtherBooks