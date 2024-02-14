
import React, { useState } from 'react';
import '../assets/css/gift.css'

export default function Theme() {
  let [array, setArray] = useState([]);
  let [inputdata, setInputdata] = useState({ themename: "", themeid: "" });
  let [index, setIndex] = useState();
  let [bolin, setBolin] = useState(false);
  let { themename, themeid } = inputdata;

  function data(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  function addinputdata() {
    if (themename === "" && themeid === "") {
      alert("Enter Theme Name and Theme ID ");
    } else {
      setArray([...array, { themename, themeid }]);
      setInputdata({ themename: "", themeid: "" });
    }
  }

  // deleting row 
  function deletedata(i) {
    let total = [...array];
    total.splice(i, 1);
    setArray(total);
  }

  // updatedata
  function updatedata(i) {
    let { themename, themeid } = array[i];
    setInputdata({ themename, themeid });
    setBolin(true);
    setIndex(i);
  }

  //know add data at perticular index means update it on that index
  function updateinfo() {
    let total = [...array];
    total.splice(index, 1, { themename, themeid });
    setArray(total);
    setBolin(false);
    setInputdata({ themename: "", themeid: "" });
  }

  return (
    <div className="gift-container">
      <div className="input-field">
        <input type="text" value={inputdata.themename || ""} name='themename' autoComplete='off' placeholder='Enter Theme Name' onChange={data} />
        <input type="text" value={inputdata.themeid || ""} name="themeid" autoComplete='off' placeholder='Enter Theme ID' onChange={data} />
        <button style={{backgroundColor:'green', borderColor:'green', height:'6vh'}} onClick={!bolin ? addinputdata : updateinfo}>{!bolin ? 'Add data' : 'Update data'}</button>
      </div>

      <div className="table-container">
        <table className='gift-table'>
          <tbody>
            <tr className='gift-tr'>
              <th className='gift-th'>Name</th>
              <th className='gift-th' >Theme Id</th>
              <th className='gift-th'>Update</th>
              <th className='gift-th'>Delete</th>
            </tr>
            {array && array.map((item, i) => (
              <tr   className='gift-tr' key={i}>
                <td  className='gift-td'>{item.themename}</td>
                <td  className='gift-td'>{item.themeid}</td>
                <td className='gift-td' ><button  className="action-buttons"  style={{backgroundColor:'orange', borderColor:'orange'}} onClick={() => updatedata(i)}>Update</button></td>
                <td className='gift-td'><button className="action-buttons"  style={{backgroundColor:'red', borderColor:'red'}} onClick={() => deletedata(i)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}