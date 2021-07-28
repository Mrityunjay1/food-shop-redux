import React from 'react'
import './index.css'
export default function Button({quantity,handleAddItem,handleRemoveItem}) {
    return (
        <div className="btnAddRemove">
            {quantity !== 0 ? (<div className="btnAddRemove-positive">
                <i className="fa fa-minus" onClick={handleRemoveItem}></i>
                <span className="">{quantity}</span>
                <i className="fa fa-plus" onClick={handleAddItem}></i>
            </div>):(<div className="btnAddRemove-negative" onClick={handleAddItem}>
            <span className="">ADD</span>
            <i className="fa fa-plus"></i>
            </div>)}
        </div>
    )
}
