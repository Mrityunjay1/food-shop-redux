import React from 'react'
import './styles.css'
import bannerImg from './banner.png'
import Logo from '../../common/Logo'

const Banner = () => {
    return (
        <header>
        <div className="header-content">
            <Logo />
            <div className="content-main">
                <h1>Buy Healthy and Fresh</h1>
                <p>We make fresh and healthy foods</p>
                <button>View Menu <i className="fas fa-long-arrow-alt-right"></i></button>
            </div>
        </div>
        <img className="header-img" src={bannerImg} alt="banner-IMG"/>
        </header>
    )
}

export default Banner;
