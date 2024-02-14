import React, { Component, useEffect, useState } from 'react'
import '../assets/css/adminprofile.css'
import axios from 'axios';

function Adminprofile() {
    const [users, setUsers] = useState({});

    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      try {
          const token = localStorage.getItem('token');
        if (!token) {
          return;
        }
        const response = await axios.get(`http://localhost:8080/user/get/${localStorage.getItem("id")}`,{
          headers: {
              Authorization: `Bearer ${token}`,
            },
        });
        console.log(response.data);
        setUsers(response.data);
      } 
      catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    return ( <div className='adminprofile-all'>
        <div className='adminprofile-image'>
            <h3>Profile</h3>
            <div className='admin-image'></div><br/>
            <button className='admin-button'>User
            </button>
        </div>
        <div className='adminprofile-details'>
            <div className='admin-details'>
            <div style={{paddingLeft:'5%', paddingTop:'5%'}}>
      <table style={{border: '1px solid #ddd'}}>
          {/* <tr style={{border: '1px solid #ddd'}}>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr> */}
          {/* {users.map(user => ( */}
            <tr>
                <td>Id</td>
              <td>{users.id}</td>
              
            </tr>
            <tr>
                <td>Name</td>
              <td>{users.name}</td>
              
            </tr>
            <tr>
                <td>Email</td>
              <td>{users.emailId}</td>
              
            </tr>
            {/* <tr>
                <td>Phone Number</td>
              <td>{users.phoneNumber}</td>              
            </tr>
            <tr>
                <td>Address</td>
              <td>{users.address}</td>              
            </tr> */}
          {/* ))} */}
      </table>
    </div>
                    {/* <h2>Edit Details</h2>
                    <label>First Name</label><br/>
                    <input type='text' value='Sahana'/><br/>
                    <label>Last Name</label><br/>
                    <input type='text' value='J'/><br/>
                    <label>Email Address</label><br/>
                    <input type='text'value='727721euit134@skcet.ac.in'/><br/>
                    <h3>Change Password</h3>
                    <label>Password</label><br/>
                    <input type='password' value='sahana123'/><br/>
                    <label> Confirm Password</label><br/>
                    <input type='password'value='sahana123'/><br/><br/>
                    <button>Save</button> */}
            </div>

        </div>
    </div> );
}

export default Adminprofile;

// import React, { Component, useState } from 'react'
// import '../assets/css/adminprofile.css'
// import icon from '../assets/images/icon1.jpg'

// function Editprofile() {
//     const [UserProfileData, setUserProfileData]=useState({
//         "name":"Sahana",
//         "email":"sahana@gmail.com",
//         "password":"sahana",
//         "confirmpassword":"sahana"
//     });

//     return ( <div className='adminprofile-all'>
//         <div className='adminprofile-image'>
//             <h3>Profile</h3>
//             <div className='admin-image'>   
//             </div><br/>
//             <button className='admin-button'>User
//             </button>
//         </div>
//         <div className='adminprofile-details'>
//             <div className='admin-details'>
//                     <h2>Edit Details</h2>
//                     <label>Name</label><br/>
//                     <input type='text' value={UserProfileData.name}/><br/>
//                     <label>Email Address</label><br/>
//                     <input type='text'value={UserProfileData.email}/><br/>
//                     <h3>Change Password</h3>
//                     <label>Password</label><br/>
//                     <input type='password' value={UserProfileData.password}/><br/>
//                     <label> Confirm Password</label><br/>
//                     <input type='password'value={UserProfileData.confirmpassword}/><br/><br/>
//                     <button>Save</button>
//             </div>

//         </div>
//     </div> );
// }

// export default Editprofile;