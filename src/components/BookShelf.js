import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { editBook } from "./../utils/bookSlice";
import { deleteBook } from "./../utils/bookSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookShelf = () => {
  const dispatch = useDispatch();
  const initialBookDetails = useSelector((state) => state.books.bookList);
  const [bookList, setBookList] = useState(initialBookDetails);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const filteredBooks = initialBookDetails.filter(
      (book) =>
        book.isbn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.bookName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBookList(filteredBooks);
  };

  const handleAddClick = () => {
    dispatch(editBook(""));
  };
  const handleEditClick = (book) => {
    dispatch(editBook(book));
  };

  const handleDelete = (bookId) => {
    const updatedBookList = bookList.filter((book) => book.id !== bookId);
    setBookList(updatedBookList);
    dispatch(deleteBook(bookId));
    toast.success("Book Deleted Successfully", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 500,
    });
  };

  return (
    <div>
      <ToastContainer />
      <div className="banner px-0 flex">
        <div className="banner w-100">
          <div className="bg-Img"></div>
          <div className="search-book d-flex">
            <i className="fa fa-search-plus" aria-hidden="true"></i>
            <input
              type="text"
              className="form-control form-rounded search-input"
              placeholder="Search by Book Name or ISBN"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              className="btn btn-primary btn-search position-absolute right-0"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-right">
          <Link to="/admin">
            <button
              onClick={() => handleAddClick()}
              className="btn btn-primary add-btn "
            >
              + Add
            </button>
          </Link>
        </div>

        <div className="table table-responsive">
          <table className="table container ">
            <thead>
              <tr>
                <th>Book Name</th>
                <th>ISBN</th>
                <th>Category</th>
                <th>Row No.</th>
                <th>Count</th>
                <th>Cost</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookList.map((book) => (
                <tr key={book.id}>
                  <td>{book.bookName}</td>
                  <td>{book.isbn}</td>
                  <td>{book.category}</td>
                  <td>{book.rowNo}</td>
                  <td>{book.count}</td>
                  <td>{book.cost}</td>
                  <td>{book.availability ? "Available" : "Not Available"}</td>
                  <td>
                    <Link
                      to={`/book/${book.id}`}
                      className="btn btn-transparent table-button"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </Link>
                    <Link to={`/admin/edit/${book.id}`}>
                      <button
                        onClick={() => handleEditClick(book)}
                        className="btn btn-transparent table-button"
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="btn btn-transparent table-button"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
