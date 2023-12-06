// Admin.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from "../utils/bookSlice";
import { useSelector } from "react-redux";
import { editBook } from "../utils/bookSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const bookBeingEdited = useSelector((state) => state.books.editBook);
  const [bookDetails, setBookDetails] = useState({
    bookName: "",
    isbn: "",
    category: "",
    rowNo: "",
    count: "",
    cost: "",
    availability: true,
  });

  useEffect(() => {
    if (bookBeingEdited) {
      setBookDetails(bookBeingEdited);
    }
  }, [id, bookBeingEdited]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(editBook({ ...bookDetails, id: bookBeingEdited.id }));
      navigate("/");
      toast.success("Book Updated Successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 500,
      });
    } else {
      dispatch(addBook({ ...bookDetails, id: Date.now() }));
      navigate("/");
      toast.success("Book Added Successfully", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 500,
      });
    }
    setBookDetails({});
  };

  return (
    <div className="container">
      <ToastContainer />
      <h2>{bookBeingEdited ? "Edit Book" : "Add New Book"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="bookName">Book Name</label>
              <input
                type="text"
                className="form-control"
                id="bookName"
                name="bookName"
                value={bookDetails.bookName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="isbn">ISBN</label>
              <input
                type="text"
                className="form-control"
                id="isbn"
                name="isbn"
                value={bookDetails.isbn}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="category">Category</label>
              <input
                type="text"
                className="form-control"
                id="category"
                name="category"
                value={bookDetails.category}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="rowNo">Row No</label>
              <input
                type="text"
                className="form-control"
                id="rowNo"
                name="rowNo"
                value={bookDetails.rowNo}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="count">Count</label>
              <input
                type="text"
                className="form-control"
                id="count"
                name="count"
                value={bookDetails.count}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="cost">Cost</label>
              <input
                type="text"
                className="form-control"
                id="cost"
                name="cost"
                value={bookDetails.cost}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="availability">Availability</label>
              <select
                className="form-select"
                id="availability"
                name="availability"
                value={bookDetails.availability}
                onChange={handleInputChange}
              >
                <option value="true">Available</option>
                <option value="false">Not Available</option>
              </select>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default Admin;
