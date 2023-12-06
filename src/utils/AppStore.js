import {configureStore}  from '@reduxjs/toolkit';
import BookSlice from './bookSlice';

const appStore = configureStore(
{
  reducer: {
    books: BookSlice,
  },
});
export default appStore;
