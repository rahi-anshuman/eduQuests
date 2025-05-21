import React from 'react'
import '../static/css/dashboard.css'
import dashboard_image from '../static/img/dashboard_img.png'

function Dashboard() {
  return (
    <div className='dashboard-content'>
        <div className='left-text'>
           <h2>Every day is a chance to focus, grow, and move forward.</h2>
        </div>
        <div className='right-img'>
            <img src={dashboard_image} alt="" />
        </div>
    </div>
  )
}

export default Dashboard