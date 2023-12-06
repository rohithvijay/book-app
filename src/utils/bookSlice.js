import { createSlice } from "@reduxjs/toolkit";

const initialBookList = [
  {
    id: 1,
    bookName: "Book 1",
    isbn: "1234567890",
    category: "Fiction",
    rowNo: "A1",
    count: 5,
    cost: 15,
    availability: true,
  },
  {
    id: 2,
    bookName: "Book 2",
    isbn: "0987654321",
    category: "Non-Fiction",
    rowNo: "B2",
    count: 3,
    cost: 20,
    availability: false,
  },
  // Add more initial books as needed
];
const bookSlice = createSlice({
  name: "books",
  initialState: {
    bookList: initialBookList,
  },
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
    editBook: (state, action) => {
      state.editBook = action.payload;
      const editedIndex = state.bookList.findIndex(
        (book) => book.id === action.payload.id
      );
      if (editedIndex !== -1) {
        state.bookList[editedIndex] = action.payload;
      }
    },
    deleteBook: (state, action) => {
      state.bookList = state.bookList.filter(
        (book) => book.id !== action.payload
      );
    },
  },
});

export const { addBook, editBook, deleteBook } = bookSlice.actions;

export default bookSlice.reducer;
