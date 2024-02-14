import React, { Component } from 'react'
import '../assets/css/product.css'
import { GoStarFill } from 'react-icons/go';
import { FaTruck } from 'react-icons/fa';
import { HiCurrencyRupee } from "react-icons/hi";
import { IoHeartCircle } from "react-icons/io5";

function product() {
    return ( <div className='product-all'>
        <div className='product-left'>
            <div className='product-image'>
                
            </div>
        </div>
        <div className='product-right'>
            <div className='product-content'>
                <h3>Butterfly Heart Combo</h3>
                {/* <p>A special gift that includes a butterfly greeting card and an adorable heart in a box.</p> */}
            
                <p style={{color:'red'}}>$349</p>
                <p>(Inclusive of taxes)</p>
                <p style={{color:'orange'}}><GoStarFill/><GoStarFill /><GoStarFill /><GoStarFill /></p><br/><br/>
                <p><FaTruck /> Free shipping on orders above $999</p>
                <p><IoHeartCircle />Made with love in India</p>
                <p><HiCurrencyRupee />All transaction are 100% secure</p><br/>
                <button>Customise Now</button><br/><br/>
                <button>Add to Cart</button>  
            </div>
        </div>
        <div className='product-specification'><hr/>
            <p className='product-headline'>Description</p>
            Give your heart, quite literally, with this super cute heart in a box.
            This combo includes a Valentine’s Day butterfly card as well. This card has a beautiful butterfly hidden inside. Once opened, it flutters out on its own. It is known to kill with its cuteness.
            <br/><br/><hr/>
            <p className='product-headline'>Specifications:</p>
            Size of this Valentine’s Day greeting card: 12 x 17 cm<br/>
            Box Size: 10 x 9.5 x 2.5 cm. Heart Size: 7 x 6 cm<br/><br/><hr/>
            <p className='product-headline'>Shipping Information</p>
            We ship all our surprises through the most reliable delivery partners in India. All surprises are shipped within one working day of receiving your order. Tracking details for your shipment will be shared over SMS and email immediately after your order is shipped.
            For priority shipping orders, we ship on the same day if the order and the customization details are received before 1 PM.<br/><br/><hr/>

            <p className='product-headline'>Refund Policy</p>
            Unhappy with what you got? Email us at surprises@gifttown.com and we shall dedicate a Happiness Consultant to resolve your issue within 8 working hours.
            If you opt for priority shipping and we're unable to deliver within 24 hours (except Sundays) of the committed date, priority shipping charges are fully refunded.
        </div>
    </div> );
}

export default product;