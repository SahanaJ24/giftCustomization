import React, { useState } from 'react';
import '../assets/css/sitesettings.css'

function Sitesettings() {
  const [aboutUsText, setAboutUsText] = useState(
    'About Us\nWelcome to Gift Town, At Gift Town, we believe that every gift tells a story. Our passion for creating memorable, personalized gifts led us to establish a platform where you can turn ordinary moments into extraordinary memories. We are more than just a gift customization website; we are curators of joy, dedicated to transforming your heartfelt sentiments into tangible, one-of-a-kind treasures.Our MissionOur mission is to celebrate the art of gifting by providing a seamless and enjoyable customization experience. We understand that each person is unique, and so are the relationships we cherish. Our goal is to help you express your love, appreciation, and warmth through thoughtfully personalized gifts that leave a lasting impression.Join Us in the Journey Whether you re celebrating a special occasion or simply expressing your love, we invite you to join us in the art of gift customization. Explore our collection, unleash your creativity, and let us help you create moments that last a lifetime. Thank you for choosing Gift Town. We look forward to being part of your cherished memories.'
  );
  const [contactUsText, setContactUsText] = useState(
    'Contact Us\nWe\'d Love to Hear from You!...Wed Love to Hear from You!At Gift Town, we value communication and are here to assist you in any way possible. Whether you have questions about our products, need assistance with customization, or want to explore partnership opportunities, were just a message away.Customer Support Our dedicated customer support team is available to answer your queries and provide assistance. Feel free to reach out via email, and well get back to you as soon as possible: Email: support@gifttown.com Business Inquiries For business-related inquiries, collaboration proposals, or any other partnerships, please contact our business development team:'
  );

  const handleSave = (section) => {
    // Perform save operation (you can send the data to a server, save to local storage, etc.)
    console.log(`Save operation performed for ${section}`);
  };

  return (
    <div className='site-settings-entire'>
      <div className='site-settings-contents'>
        <div className='sitesetting-aboutus'>
          <h2>About Us</h2>
          <br />
          <textarea
            value={aboutUsText}
            onChange={(e) => setAboutUsText(e.target.value)}
          />
          <br />
          <button
            className='sitesetting-btn2'
            onClick={() => handleSave('about')}
          >
            Save Changes
          </button>
        </div>
        <br />
        <div className='sitesetting-contactus'>
          <h2>Contact Us</h2>
          <br />
          <textarea
            value={contactUsText}
            onChange={(e) => setContactUsText(e.target.value)}
          />
          <br />
          <button
            className='sitesetting-btn2'
            onClick={() => handleSave('contact')}
          >
            Save Changes
          </button>
        </div>
        {/* Add additional sections as needed */}
      </div>
    </div>
  );
}

export default Sitesettings;

