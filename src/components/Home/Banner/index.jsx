import React from 'react'
import './styles.css'
import bannerImg from './banner2.png'
import Logo from '../../common/Logo'

const Banner = () => {
    return (
        <header>
        <div className="header-content">
            <Logo />
            <div className="content-main">
                <h1>Delicious Food For Your craving</h1>
                <p>We make fresh and healthy foods</p>
                <button>View Menu <i className="fas fa-long-arrow-alt-right"></i></button>
            </div>
        </div>
        <img className="header-img" src={bannerImg} alt="banner-IMG"/>
        </header>
    )
}

export default Banner;
