import React from 'react'
import Allproduct from '../assets/other/Allproduct'
import Item from './item'
const Products = () => {
  return (
    <div className='products'>
        <div className='products-item'>
            {Allproduct.map((item,i)=>{
                return<Item key={i}id={item.id}name={item.name}img={item.img}price={item.pice}/>
            })}
        </div>
    </div>
  )
}

export default Products