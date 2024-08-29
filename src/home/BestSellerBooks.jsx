import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://book-server-o1xw.onrender.com/all-books").then(res => res.json()).then(data => setBooks(data.slice(0, 15)))
  })
  return (
    <div>
      <BookCards books={books} headLine="Best Seller Books" />
    </div>
  )
}

export default BestSellerBooks