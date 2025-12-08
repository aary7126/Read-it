import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/AccountLayout.css'

const AccountLayout = () => {
  return (
    <div className='flex gap-2'>
        <div className="side-nav">
            <ul>
                <Link to=''><li>Profile</li></Link>
                <Link to='orders'><li>Orders</li></Link>
            </ul>
        </div>
        <Outlet />
    </div>
  )
}

export default AccountLayout