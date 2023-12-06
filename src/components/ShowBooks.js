// ShowBooks.js
import React from 'react';
import QRCode from 'qrcode.react'; //
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

  const ShowBooks = ({ books }) => {
    const initialBookDetails = useSelector((state) => state.books.bookList);
    const { bookId } = useParams();
    const selectedBook = initialBookDetails.find((book) => book.id === parseInt(bookId));

  const qrCodeContent = `Book ID: ${selectedBook.id}, ISBN: ${selectedBook.isbn}`;

  return (
    <div>
      <h2>Book Details for ID: {bookId}</h2>
      <p>Book Name: {selectedBook.bookName}</p>
      <QRCode value={qrCodeContent} />
    </div>
  );
};

export default ShowBooks;
