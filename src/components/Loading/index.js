import React from 'react';
import logo from './../../logo.svg';
import './Loading.css';

function Loading() {
    return (
        <div className="loading">
            <img src={logo} alt="Loading" className="loading-logo" />
            <a
                className="loading-link"
                href="https://fb.com/doahoangaymoi"
                target="_blank"
                rel="noopener noreferrer"
            >
                Le Duc Phan Anh
            </a>
        </div>
    );
}

export default Loading;