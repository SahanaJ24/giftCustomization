import React, { Component } from 'react'
import '../assets/css/item.css'
import item1 from '../assets/images/item4.png'
import { GoStarFill } from "react-icons/go";

function Item({gift}) {
    return ( 
    <div className='item-entire'>
        <div className='item-image'>
            <img src={item1} alt='' style={{height:'30vh', width:'100%'}} />
        </div>
        <div className='item-desc'>
            <p className='item-desc-p1'>{gift.name}</p><br/>
            <p style={{color:'orange'}}><GoStarFill /><GoStarFill /><GoStarFill /><GoStarFill /></p>
            <p className='item-desc-p2'>{gift.gdesc}</p><br/>
            <hr></hr>
            <p className='item-desc-p3'>${gift.gprice}</p>
        </div>
    </div> 
    );
}

export default Item;