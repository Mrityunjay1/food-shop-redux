import React from 'react'
import './styles.css'
import logoPng from './logo.png'

export default function Logo() {
    return (
        <div className="logo">
            <div>
                <img src={logoPng} alt="logo" />
                <span><b>7th Street</b></span>
            </div>
            <div>
                <p><b>Cuisine</b></p>
            </div>
        </div>
    )
}
