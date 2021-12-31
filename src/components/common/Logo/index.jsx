import React from "react";
import './styles.css';
import logoImg from './logo.png';

const Logo = () => {
    return (
        <div className="logo">
            <div>
                <img src={logoImg} alt="logo" />
                <span><b>Taste</b></span>
            </div>
            <p>
                <b>Restaurant & BBQ</b>
            </p>
        </div>
    );
}

export default Logo;