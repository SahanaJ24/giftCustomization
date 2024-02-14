import React, { Component } from 'react'
import '../assets/css/dashboard.css'
import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import Orders from './Orders';

function Dashboard() {
    return ( <div className='dashboard-all'>
        <div className='dashboard-details'>
                <div className='dashboard-users'>
                    <div className='dashboardright-data'>
                        <p>Total sales</p>
                        <h3>$36000</h3>
                    </div>
                    <div className='dashboardright-data'>
                        <p>Total Orders</p>
                        <h3>670</h3>
                    </div>
                    <div className='dashboardright-data'>
                        <p>Total Products</p>
                        <h3>400</h3>
                    </div>
                </div>
        </div>
        
        <div className='dashboard-chart'>
            <Bar 
                data={{
                    labels:["2021","2022","2023"] ,
                    datasets:[
                        {
                            label:"Revenue",
                            data:[2,3,4,5,6],
                        },
                        {
                            label:"Loss",
                            data:[1,2,3,4,5],
                        },
                    ],
                }}
            />
        </div>
        <div >
            <Orders/>
        </div>
    </div> );
}

export default Dashboard;