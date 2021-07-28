import { cartActionTypes } from "./cart.actionTypes";
import { addItemToCart, removeItemFromCart } from "./cart.utils";




const initialState ={
    cartItems:[]
};
const cartReducer=(state=initialState,action)=>{
    switch(action.type){
        case cartActionTypes.CART_ADD_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.CART_REMOVE_ITEM:
            return{
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }
        default:
            return state;

    }
};
export default cartReducer;