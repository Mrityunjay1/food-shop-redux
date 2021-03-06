import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { cartAddItem, cartRemoveItem } from '../../../../redux/cart/cart.action';
import { selectCartItems, selectCartItemsCount } from '../../../../redux/cart/cartSelector';
import Button from '../../Button';
import "./index.css"

function MenuItem({ item,cartCount,cartList,cartAddItem,cartRemoveItem}) {
    const { id, name, img, info, price,available } = item;

    const handleItemQuantity=()=>{
        let quantity=0;
        if(cartCount !==0){
            const foundItemInCart=cartList.find(item=>item.id ===id);
            if(foundItemInCart){
                quantity=foundItemInCart.quantity;
            }
        }
        return quantity;
    };
    return (

        <div>
            <div className="item">
                <img src={img} alt="item" />
                <div className="item-head_desc">
                    <p className="head_desc-name">{name}</p>
                    <p className="heade_desc-info"><small>{info}</small></p>
                </div>
                <div className="item-foot_desc">
                    <span className="foot_desc-price">${price}</span>
                    <Button quantity={handleItemQuantity()} handleAddItem={()=>cartAddItem(item)}
                    handleRemoveItem={()=>cartRemoveItem(item)} />
                </div>
                <div>

                    {available !==0 ? <p>Quantity:{available}</p>:<p>item not available</p>}  

                </div>
            </div>
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartCount:selectCartItemsCount,
    cartList:selectCartItems
});
const mapDispatchToProps = dispatch=>({
    cartAddItem:item=>dispatch(cartAddItem(item)),
    cartRemoveItem:item=>dispatch(cartRemoveItem(item))
});

export default connect(mapStateToProps,mapDispatchToProps)(MenuItem)
