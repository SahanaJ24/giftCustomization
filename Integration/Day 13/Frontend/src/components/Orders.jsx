import React, { Component } from 'react'
import '../assets/css/orders.css'
function Orders() {
    return ( <div className='orders-all'>
        <div className='orders-contents'>
            <h2>Orders</h2><br/>
            <table className='orders-table'>
                <tr className='orders-tr-main'>
                    <th>Order Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Cost</th>
                    <th>Status</th>
                    <th>Date</th>
                </tr>
                <tr className='orders-tr'>
                    <td>2323</td>
                    <td>Zara</td>
                    <td>zara@gmail.com</td>
                    <td>$400</td>
                    <td>
                        <select>
                            <option>Status</option>
                            <option>Delivered</option>
                            <option>Cancelled</option>
                            <option>Pending</option>
                        </select>
                    </td>
                    <td>24.01.2024</td>
                </tr>
                <tr className='orders-tr'>
                    <td>2324</td>
                    <td>Shreya</td>
                    <td>shreya@gmail.com</td>
                    <td>$789</td>
                    <td>
                        <select>
                            <option>Status</option>
                            <option>Delivered</option>
                            <option>Cancelled</option>
                            <option>Pending</option>
                        </select>
                    </td>
                    <td>26.01.2024</td>
                </tr>
                <tr  className='orders-tr'>
                    <td>2326</td>
                    <td>Hazel</td>
                    <td>hazel@gmail.com</td>
                    <td>$800</td>
                    <td>
                        <select>
                            <option>Status</option>
                            <option>Delivered</option>
                            <option>Cancelled</option>
                            <option>Pending</option>
                        </select>
                    </td>
                    <td>12.01.2024</td>
                </tr>
                <tr  className='orders-tr'>
                    <td>2325</td>
                    <td>Shreya</td>
                    <td>shreya@gmail.com</td>
                    <td>$567</td>
                    <td>
                        <select>
                            <option>Status</option>
                            <option>Delivered</option>
                            <option>Cancelled</option>
                            <option>Pending</option>
                        </select>
                    </td>
                    <td>26.01.2024</td>
                </tr>
            </table>
        </div>
    </div> );
}

export default Orders;