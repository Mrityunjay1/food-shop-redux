import React from 'react'
import './styles.css'
import {useHistory} from 'react-router'

export default function EmptyCart() {
    const history = useHistory()
    return (
        <div className="empty-cart">
            <img src='https://merchlist.co/assets/emptycart.png'  alt='empty' />
            <button onClick={()=>history.push('/')}><i className="fas fa-long-arrow-alt-left"></i>Shop now</button>
        </div>
    )
}
