import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../assets/css/register.css'
function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [registeredUser, setRegisteredUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const postUserData = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1/auth/register", {
        "name": username,
        "email": email,
        "password": password,
        "confirmPassword": password
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleRegister = () => {
    const newErrors = {};

    // Username validation
    if (!username) {
      newErrors.username = 'Username is required';
    }

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email address';
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required';
    }

    // Phone number validation
    if (!phoneNumber) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = 'Invalid phone number (10 digits)';
    }

    if (Object.keys(newErrors).length === 0) {
      const user = { username, email, phoneNumber };
      setRegisteredUser(user);
      setErrors({});
      postUserData();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className='register-all'>
      <div className='reg-container'>
      <div className="register-image">
      </div>
        {/* <h1>Register</h1> */}
        {registeredUser ? (
          <div><br/>
            <p>Registration successful!</p><br/>
            <p>Welcome, {registeredUser.username}!</p><br/>
            <p>Email: {registeredUser.email}</p><br/>
            <p>Phone Number: {registeredUser.phoneNumber}</p><br/>
            <Link to='/Login'><button style={{backgroundColor:'green', borderColor:'green', height:'6vh',width:'20%'}}>Login</button></Link>
          </div>
        ) : (
          <div className='reg-fields'>
              <h1>Register</h1><br/>
            <input
              type='text'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className='error'>{errors.username}</span>
            <br/>
            <input
              type='email'
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className='error'>{errors.email}</span>
            <br/>
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className='error'>{errors.password}</span>
            <br/>
            <input
              type='number'
              placeholder='Phone Number'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <span className='error'>{errors.phoneNumber}</span>
            <br/>
            <button onClick={handleRegister}>Register</button>
            <Link to='/Login'><p>Already have an account? Login</p></Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;


// import '../assets/css/register.css';
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function Register() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [errors, setErrors] = useState({});
//   const [registeredUser, setRegisteredUser] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const postUserData= async () => {
//     try{
//       await axios.post(http://localhost:8080/api/v1/auth/register,{
//         "name": username,
//         "email": email,
//         "password": password,
//         "confirmPassword": password
//       });
//     }
//     catch(error){
//       console.log(error);
//     }
//   }
//   const handleRegister = () => {
//     const newErrors = {};
//     // Username validation
//     if (!username) {
//       newErrors.username = 'Username is required';
//     }

//     // Email validation
//     if (!email) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = 'Invalid email address';
//     }

//     // Password validation
//     if (!password) {
//       newErrors.password = 'Password is required';
//     }

//     // Phone number validation
//     if (!phoneNumber) {
//       newErrors.phoneNumber = 'Phone Number is required';
//     } else if (!/^\d{10}$/.test(phoneNumber)) {
//       newErrors.phoneNumber = 'Invalid phone number (10 digits)';
//     }
//     if (Object.keys(newErrors).length === 0) {
//       const user = { username, email, phoneNumber };
//       setRegisteredUser(user);
//       setErrors({});
//       postUserData();
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className='register-all'>
//       <div className='reg-container'>
//         <h1>Register</h1>
//         {registeredUser ? (
//           <div><br/>
//             <p>Registration successful!</p><br/>
//             <p>Welcome, {registeredUser.username}!</p><br/>
//             <p>Email: {registeredUser.email}</p><br/>
//             <p>Phone Number: {registeredUser.phoneNumber}</p><br/>
//             <Link to='/Login'><button style={{backgroundColor:'green', borderColor:'green', height:'6vh',width:'20%'}}>Login</button></Link>
//           </div>
//         ) : (
//           <div className='reg-fields'>
//             <input
//               type='text'
//               placeholder='Username'
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             /><br/>
//             <span className='error'>{errors.username}</span>
//             <br/><br/>
//             <input
//               type='email'
//               placeholder='Email Address'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             /><br/>
//             <span className='error'>{errors.email}</span>
//             <br/><br/>
//             <input
//               type='password'
//               placeholder='Password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             /><br/>
//             <span className='error'>{errors.password}</span>
//             <br/><br/>
//             <input
//               type='number'
//               placeholder='Phone Number'
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             /><br/>
//             <span className='error'>{errors.phoneNumber}</span>
//             <br/><br/>
//             <button onClick={handleRegister}>Register</button>
//             <Link to='/Login'><p>Already have an account? Login</p></Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Register;
