import React,{useState} from 'react'
import MenuItem from './MenuItem'
import { menuItemsData } from './data'
import './styles.css'

const unique= [
    ...new Set(menuItemsData.map((item)=>{
    return item.category;
})
),
];


export default function Menu({ list }) {
    const [menuData,setMenuData] =useState(list)
    const [menu,setMenu]=useState(unique)
    const filterItem =(category)=>{
        const updatedList=menuData.filter((item)=>{
            return item.category === category;
        })
        setMenuData(updatedList);
    }
    return (
        <div>
            <nav>
                <div className="navbar">
                    <div className="btn-group">
                    {menu.map((item) =>{
                        return(
                        <button className="btn-group_item" onClick={()=>filterItem(item)}>{item}</button>
                        
                        )
                    })}
                    <button className="btn-group_item" onClick={()=>setMenuData(list)}>All</button>
                    </div>

                </div>
            </nav>
            <main>

                {menuData.map((item) => {
                    return (
                        <MenuItem key={item.id} item={item} />
                    )
                })}
            </main>
        </div>
    )
}
