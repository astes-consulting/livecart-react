import React from 'react';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path='*' element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;