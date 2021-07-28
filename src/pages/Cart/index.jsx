import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import EmptyCart from '../../components/common/Cart/emptycart'
import Footer from '../../components/common/Footer'
import Logo from '../../components/common/Logo'
import Menu from '../../components/common/Menu'
import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/cart/cartSelector'
import './styles.css'

function CartPage({cartCount,cartList,cartTotal}) {
    return (
        <div>
            <div className="cart-header">
                <Logo />
            </div>
            {cartCount ===0 ? (<EmptyCart />) :(
                <div className="orders">
                <h1 className="orders-heading">Your orders</h1>
                <div className="orders-menu">
                    <Menu list={cartList} />
                </div>
                <h3 className="orders-total">Total= ${cartTotal}</h3>
            </div>
            )}
            
            
            <Footer />
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartCount:selectCartItemsCount,
    cartList:selectCartItems,
    cartTotal:selectCartTotal
});


export default connect(mapStateToProps)(CartPage);
