import React from 'react'
import { menuItemsData } from './data'
import MenuItem from './MenuItem'
import './styles.css'

export default function Menu() {
    return (
        <div>
            <main>
                {menuItemsData.map((item)=>{
                    return(
                        <MenuItem key={item.id} item={item} />
                    )})}
            </main>
        </div>
    )
}
