import React from 'react'
import Cart from '../../components/common/Cart'
import Footer from '../../components/common/Footer'
import Menu from '../../components/common/Menu'
import { menuItemsData } from '../../components/common/Menu/data'
import Banner from '../../components/Home/Banner'

const HomePage = () => {
    return (
        <div>
            <Banner />
            <Menu  list={menuItemsData}/>
            <Cart />
            <Footer />
        </div>
    )
}

export default HomePage
