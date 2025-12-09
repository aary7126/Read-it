import { X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = ({setShowMenu}) => {
    const handleCloseMenu = () => {
        setShowMenu(false)
    }
  return (
    <div className="side-menu">
        <X className='mb-20' onClick={handleCloseMenu}/>
        <ul>
            <Link to='/shop' className='hover-link' onClick={handleCloseMenu}><li>Shop</li></Link>
            <Link to='/categories' className='hover-link' onClick={handleCloseMenu}><li>Categories</li></Link>
            <Link to='/account' className='hover-link' onClick={handleCloseMenu}><li>Account</li></Link>
            <Link to='/cart' className='hover-link' onClick={handleCloseMenu}><li>Cart</li></Link>
        </ul>
    </div>
  )
}

export default SideMenu