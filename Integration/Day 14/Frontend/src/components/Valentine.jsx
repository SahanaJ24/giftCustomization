import React from 'react';
import Items from './valmain';
import Vdata from './vdata';
import '../assets/css/valentine.css'

const Valentine = ({ productItems, handleAddProduct}) => {
  return (
    <>
      <div className='valproducts'>
        {productItems.map((productItem) => (
          <div className='valcard' key={productItem.id}>
            <div>
              <img className="val-images" src={productItem.image} alt={productItem.name} />
            </div>
            <div>
              <h3 className='valproduct-name'>
                {productItem.name}
              </h3>
            </div>
            <div className='valproduct-price'> ₹ {productItem.price}</div>
            <div ><button className='valproduct-addcart' onClick={() => handleAddProduct(productItem)}>Add to Cart</button></div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Valentine;


// import React from 'react'
// import Items from './valmain';
// import Vdata from './vdata';
// import './valentine.css'

// const Valentine = ({productItems, handleAddProduct}) => {
//     // const {productItems} = Vdata;

//     return (
//         <>
//             <div className='valproducts'>
//                 {productItems.map((productItems)=>(
//                     <div className='valcard'>
//                         <div>
//                             <img className="val-images" src={productItems.image} alt={productItems.name}/>
//                         </div>
//                         <div>
//                             <h3 className='valproduct-name'>
//                                 {productItems.name}
//                             </h3>
//                         </div>
//                         <div className='valproduct-price'> ₹ {productItems.price}</div>
//                         <div ><button className='valproduct-addcart' onClick={() => handleAddProduct(productItems)}>Add to Cart</button></div>
//                     </div>
//                 ))}
        
//             </div>   
//         </>
//     )
// }

// export default Valentine


// function Valentine() {
//     return ( 
//     <>
//     <div style={{display:'flex'}}>
//     <Items/>
//     <Items/>
//     <Items/>
//     <Items/>
//     </div>
//     <div style={{display:'flex'}}>
//     <Items/>
//     <Items/>
//     <Items/>
//     <Items/>
//     </div>
//     </>
//     );
// }

// export default Valentine;