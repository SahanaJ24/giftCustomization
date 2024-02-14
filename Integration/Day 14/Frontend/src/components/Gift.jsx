
// import React, { useState } from 'react';
// import '../assets/css/gift.css'

// export default function Gift() {
  

//   let [array, setArray] = useState([]);
//   let [inputdata, setInputdata] = useState({ name: "", prodid: "" ,desc:"",price:"",theme:""});
//   let [index, setIndex] = useState();
//   let [bolin, setBolin] = useState(false);
//   let { name,prodid,desc,price,theme } = inputdata;

//   function data(e) {
//     setInputdata({ ...inputdata, [e.target.name]: e.target.value });
//   }

//   function addinputdata() {
//     if (name === "" && prodid === ""&&desc===""&&price===""&&theme==="") {
//       alert("Enter all details");
//     } else {
//       setArray([...array, { name, prodid,desc,price,theme }]);
//       setInputdata({ name: "", prodid: "" ,desc:"",price:"",theme:""});
//     }
//   }

//   // deleting row 
//   function deletedata(i) {
//     let total = [...array];
//     total.splice(i, 1);
//     setArray(total);
//   }

//   // updatedata
//   function updatedata(i) {
//     let { name,prodid,desc,price,theme } = array[i];
//     setInputdata({ name,prodid,desc,price,theme });
//     setBolin(true);
//     setIndex(i);
//   }

//   //know add data at perticular index means update it on that index
//   function updateinfo() {
//     let total = [...array];
//     total.splice(index, 1, { name,prodid,desc,price,theme });
//     setArray(total);
//     setBolin(false);
//     setInputdata({ name: "", prodid: "" ,desc:" ",price:" ",theme:" "});
//   }

//   return (
//     <div className="gift-container">
//       <div className="input-field">
//         <input type="text" value={inputdata.name || ""} name='name' autoComplete='off' placeholder='Enter Name' onChange={data} />
//         <input type="number" value={inputdata.prodid || ""} name="prodid" placeholder='Enter Product ID' onChange={data} />
//         <input type="text" value={inputdata.desc || ""} name='desc' autoComplete='off' placeholder='Enter Description' onChange={data} />
//         <input type="text" value={inputdata.price || ""} name='price' autoComplete='off' placeholder='Enter Price' onChange={data} />
//         <input type="text" value={inputdata.theme || ""} name='theme' autoComplete='off' placeholder='Enter Theme' onChange={data} />
//         <button style={{backgroundColor:'green', borderColor:'green', height:'6vh'}} onClick={!bolin ? addinputdata : updateinfo}>{!bolin ? 'Add data' : 'Update data'}</button>
//       </div>

//       <div className="table-container">
//         <table className='gift-table'>
//           <tbody>
//             <tr className='gift-tr'>
//               <th className='gift-th'>Name</th>
//               <th className='gift-th' >Product Id</th>
//               <th className='gift-th'>Description</th>
//               <th className='gift-th'>Price</th>
//               <th className='gift-th'>Theme</th>
//               <th className='gift-th'>Update</th>
//               <th className='gift-th'>Delete</th>
//             </tr>
//             {array && array.map((item, i) => (
//               <tr   className='gift-tr' key={i}>
//                 <td  className='gift-td'>{item.name}</td>
//                 <td  className='gift-td'>{item.prodid}</td>
//                 <td  className='gift-td'>{item.desc}</td>
//                 <td  className='gift-td'>{item.price}</td>
//                 <td  className='gift-td'>{item.theme}</td>
//                 <td className="action-buttons"><button style={{backgroundColor:'orange', borderColor:'orange'}} onClick={() => updatedata(i)}>Update</button></td>
//                 <td className="action-buttons"><button style={{backgroundColor:'red', borderColor:'red'}} onClick={() => deletedata(i)}>Delete</button></td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/gift.css';

export default function Gift() {
  const [array, setArray] = useState([]);
  const [inputdata, setInputdata] = useState({ name: "", gid: "", gdesc: "", gprice: "", theme: "" });
  const [index, setIndex] = useState();
  const [bolin, setBolin] = useState(false);
  const { name, gid, gdesc, gprice, theme } = inputdata;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
  
      const response = await axios.get('http://localhost:8080/gift/get', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setArray(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  function data(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  async function addinputdata() {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Handle the case where the token is missing
        return;
      }
  
      await axios.post('http://localhost:8080/gift/post', { name, gid, gdesc, gprice, theme }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchData();
      setInputdata({ name: "", gid: "", gdesc: "", gprice: "", theme: "" });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  }

  async function deletedata(i) {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Handle the case where the token is missing
        return;
      }
      await axios.delete(`http://localhost:8080/gift/delete/${array[i].gid}`,{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  }

  function updatedata(i) {
    setInputdata({ ...array[i] });
    setBolin(true);
    setIndex(i);
  }

  async function updateinfo() {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        // Handle the case where the token is missing
        return;
      }
      await axios.put('http://localhost:8080/gift/update', { ...inputdata },{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchData();
      setBolin(false);
      setInputdata({ name: "", gid: "", gdesc: "", gprice: "", theme: "" });
    } catch (error) {
      console.error('Error updating data:', error);
    }
  }

  return (
    <div className="gift-container">
      <div className="input-field">
        <input type="number" value={inputdata.gid || ""} name="gid" placeholder='Enter Product ID' onChange={data} />
        <input type="text" value={inputdata.name || ""} name='name' autoComplete='off' placeholder='Enter Name' onChange={data} />
        <input type="text" value={inputdata.gdesc || ""} name='gdesc' autoComplete='off' placeholder='Enter Description' onChange={data} />
        <input type="text" value={inputdata.gprice || ""} name='gprice' autoComplete='off' placeholder='Enter Price' onChange={data} />
        <input type="text" value={inputdata.theme || ""} name='theme' autoComplete='off' placeholder='Enter Theme' onChange={data} />

        <button style={{ backgroundColor: 'green', borderColor: 'green', height: '6vh' }} onClick={!bolin ? addinputdata : updateinfo}>
          {!bolin ? 'Add data' : 'Update data'}
        </button>
      </div>

      <div className="table-container">
        <table className='gift-table'>
          <tbody>
            <tr className='gift-tr'>
              <th className='gift-th'>Product Id</th>
              <th className='gift-th'>Name</th>
              <th className='gift-th'>Description</th>
              <th className='gift-th'>Price</th>
              <th className='gift-th'>Theme</th>
              <th className='gift-th'>Update</th>
              <th className='gift-th'>Delete</th>
            </tr>
            {array && array.map((item, i) => (
              <tr className='gift-tr' key={i}>
                <td className='gift-td'>{item.gid}</td>
                <td className='gift-td'>{item.name}</td>
                <td className='gift-td'>{item.gdesc}</td>
                <td className='gift-td'>{item.gprice}</td>
                <td className='gift-td'>{item.theme}</td>
                <td className="action-buttons"><button style={{ backgroundColor: 'orange', borderColor: 'orange' }} onClick={() => updatedata(i)}>Update</button></td>
                <td className="action-buttons"><button style={{ backgroundColor: 'red', borderColor: 'red' }} onClick={() => deletedata(i)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
