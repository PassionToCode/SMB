import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import ActivatePage from "./pages/ActivatePage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/activate/:uid/:token" element={<ActivatePage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer theme="dark" />
        </main>
        <Footer />
      </Router>
    </>
  );
};

export default App;
