import '../assets/css/login.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/auth/login", loginData);
      if (response.status === 202 && response.data.role === "USER") {
        const { token, userId } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("id", userId);
        alert("login successful");
        navigate('/Mainpage/Allproduct');
      } else if (response.status === 202 && response.data.role === "ADMIN") {
        const token = response.data.token;
        localStorage.setItem("token", token);
        alert("login successful");
        navigate('/Adminsidebar/Dashboard');
      }
    }
    catch (error) {
      console.log(error);
    }
  }

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setLoginData(prevData => ({
      ...prevData, [id]: value
    }))
  }

  return (
    <div className='login-all'>
      <div className='login-container'>
        <div className='login-image'></div>
        <div className='login-fields'>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='Email Address'
              value={loginData.email}
              id='email'
              onChange={handleInputChange}
            /><br />
            <input
              type='password'
              id='password'
              placeholder='Password'
              value={loginData.password}
              onChange={handleInputChange}
            /><br />
            <button type="submit">Login</button>
            <Link to='/Register'>
              <p>New User? Register</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;





// import '../assets/css/login.css';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Login() {
//   const navigate=useNavigate();
//   const [loginData, setLoginData]=useState({
//     "email":"",
//     "password":""
// });

// // const postLoginData=async()=>{
// //   try{
// //     const response=await axios.post("http://lcoal")
// //   }
// // }
// const handleSubmit=async (event)=>{
  
//     event.preventDefault();
//     try{
//         const response=await axios.post(http://localhost:8080/api/v1/auth/login, loginData);
//         if(response.status===202&&response.data.role==="USER")
//         {
//           // const token=response.data.token;
//           const {token,userId}=response.data;
//           console.log(token);
//           localStorage.setItem("token",token);
//           localStorage.setItem("id",userId);
//           console.log(response.data);
//           alert("login successful");
//           navigate('/header');
//         }
//         else if(response.status===202&&response.data.role==="ADMIN"){
//           const token=response.data.token;
//           console.log(token);
//           localStorage.setItem("token",token);
//           alert("login successful");
//           navigate('/admin/admindashboard');

//         }
//     }
//     catch(error){
//         // setLoginFailure(true);
//         console.log(error);
//     }
// }

// const handleInputChange=(event)=>{
//     const {id,value}=event.target;
//     setLoginData(prevData=>({
//         ...prevData, [id]:value
//     }))
// }

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loggedInUser, setLoggedInUser] = useState(null);
//   const [showPopup, setShowPopup] = useState(false); // State for showing/hiding popup

//   const handleLogin = () => {
//     const newErrors = {};

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
//     if (Object.keys(newErrors).length === 0) {
//       console.log('Login successful!');
//       const user = { username: 'DemoUser', email: email };
//       setLoggedInUser(user);
//       setErrors({});
//       setShowPopup(true); // Show the popup
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   return (
//     <div className='login-all'>
//       <div className='login-image'></div>
//       <div className='login-container'>
//         <h1>Sign In</h1>
//         {loggedInUser ? (
//           <div><br/><br/>
//             <p>Welcome to Gift Town,</p><br/>
//             <p>Email: {loggedInUser.email}</p><br/><br/>
//             <Link to='/'><button style={{backgroundColor:'green', borderColor:'green', height:'6vh',width:'20%'}}>Home Page</button></Link>
//           </div>
//         ) : (
//           <div className='login-fields'>
//             <input
//               type='email'
//               placeholder='Email Address'
//               value={loginData.email}
//               id='email'
//               onChange={handleInputChange}
//             /><br/>
//             <span style={{color:'red'}} className='error'>{errors.email}</span>
//             <br/><br/>
//             <input
//               type='password'
//               id='password'
//               placeholder='Password'
//               value={loginData.password}
//               onChange={handleInputChange}
//             /><br/>
//             <span style={{color:'red'}} className='error'>{errors.password}</span>
//             <br/><br/>
            
//             <button onClick={handleSubmit}>Login</button>
//             <br/><br/>
//             <Link to='/Register'>
//               <p>New User? Register</p>
//             </Link>
//           {/* <button style={{backgroundColor:'rgb(46, 125, 133)',color:'white',width:'30%',height:'6vh'}}>Admin</button> */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;
