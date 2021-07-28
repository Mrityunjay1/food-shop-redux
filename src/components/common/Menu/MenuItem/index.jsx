import React from 'react'
import Button from '../../Button';
import "./index.css"

export default function MenuItem({item}) {
    const {id,name,img,info,price}=item;
    return (
        <div className="item">
            <img src={img} alt="item" />
            <div className="item-head_desc">
                <p className="head_desc-name">{name}</p>
                <p className="heade_desc-info"><small>{info}</small></p>
            </div>
            <div className="item-foot_desc">
                <span className="foot_desc-price">${price}</span>
                <Button quantity={100} />
            </div>
        </div>
    )
}
