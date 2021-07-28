import React from 'react'
import './styles.css'
import logoPng from './logo.png'

export default function Logo() {
    return (
        <div className="logo">
            <div>
                <img src={logoPng} alt="logo" />
                <span><b>Shop</b></span>
            </div>
            <div>
                <p><b>Lets's Go</b></p>
            </div>
        </div>
    )
}
