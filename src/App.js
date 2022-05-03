import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { LanguagePrivader } from "./contexts/LanguageContext";
import MyRoutes from "./my-routes/MyRoutes";
import "swiper/css/bundle";
import { BasketProvider } from "./contexts/BasketContext";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { ToastContainer } from "react-toastify";

//useContext/redux
function App() {

  
  return (
    <>
      <BrowserRouter>
          <Provider store={store}>
            <Header/>
            <MyRoutes />
            <Footer />
          </Provider>
      </BrowserRouter>
      <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
    </>
  );
}

export default App;
