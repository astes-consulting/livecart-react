import React from "react";
import './styles.css';
import emptyCart from '../../Home/Banner/banner.png';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
    const navigate = useNavigate();
    return (
        <div className="emptyCart">
            <img src={emptyCart} alt="empty cart" />
            <button onClick={() => navigate('/')}>
                <i className="fas fa-long-arrow-alt-left"></i> Shop Now
            </button>
        </div>
    );
}

export default EmptyCart;