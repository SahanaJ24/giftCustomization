// import React from 'react';
// import '../assets/css/cart.css'

// const AddtoCart = ({ cartItems, handleAddProduct, handleRemoveProduct, handlrCartClearance}) => {

//     const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

//   return (
//     <div className='cart-items'>
//       <h2 className='cart-items-header'>Cart Items</h2>
//       <div className='clear-cart'>
//         {cartItems.length >=1 && (
//             <button className='clear-cart-button' onClick={handlrCartClearance}>Clear Cart</button>
//         )}
//       </div>
//       {(!cartItems || cartItems.length === 0) && (
//         <div className='cart-items-empty'>No items are added.</div>
//       )}

//       {Array.isArray(cartItems) && (
//         <div>
//           {cartItems.map((item) => (
//             <div key={item.id} className='cart-item-list'>
//               <img
//                 className='cart-items-image'
//                 src={item.image}
//                 alt={item.name}
//               />
//               <div className='cart-items-name'>{item.name}</div>
//               <div className='cart-items-function'>
//                 <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
//                 <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
//               </div>
//               <div className='cart-items-price'>{item.quantity} * ₹ {item.price}</div>
//             </div>

//           ))}
//         </div>
//       )}
//       <div className='cart-items-total-price-name'>
//         Total Price
//         <div className='cart-items-total-price'>
//         ₹{totalPrice}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddtoCart;







//before
import React, { Component } from 'react'
import '../assets/css/userorders.css'
import order1 from '../assets/images/item4.png'
import order2 from '../assets/images/item3.png'

function AddtoCart() {
    return ( <div className='userorders-all'>
        <div className='userorders-contents'>
            <h2 style={{marginTop:'1%'}}>Add to Cart</h2>
            <div className='userorder-product'>
                <div className='userorder-image'>
                    <img src={order1} alt='' height='115%' width='100%'/>
                </div>
                <div className='userorder-right'>
                    <div style={{paddingTop:'2%'}}>
                        <br/>
                        <p>Butterfly Heart Combo</p>
                        <p style={{color:'red'}}>$380</p><br/>
                    </div>
                    <div style={{paddingTop:'2%'}} className='userorder-check'>
                    <br/>
                        <p>Quantity</p>
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
            </div>

            <div className='userorder-product'>
                <div className='userorder-image'>
                    <img src={order2} alt='' height='115%' width='100%'/>
                </div>
                <div className='userorder-right'>
                    <div style={{paddingTop:'2%'}}>
                        <br/>
                        <p>Star Frame</p>
                        <p style={{color:'red'}}>$420</p><br/>
                    </div>
                    <div style={{paddingTop:'2%'}} className='userorder-check'>
                    <br/>
                    <p>Quantity</p>
                        <button>+</button>
                        <button>-</button>
                    </div>
                </div>
            </div>
        </div>
    </div> );
}

export default AddtoCart;