import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from "./components/Admin";
import Bookshelf from "./components/BookShelf";
import Header from "./components/header";
import Footer from "./components/footer";
import ShowBooks from "./components/ShowBooks";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import "./App.css";

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="bookshelf-app">
        <Header />
          <div className="container body-container py-5">
            <Routes>
              <Route path="/" element={<Bookshelf />} />
              <Route path="/admin/edit/:id" element={<Admin />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/showBooks" element={<ShowBooks />} />            
              <Route
                path="/book/:bookId"
                element={<ShowBooks/>}
              />
            </Routes>
          </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
