import React, { useState } from 'react'
import { Menu, Search, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import SideMenu from './SideMenu'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(true)
    }
  return (
    <div className='navbar'>
        <Link to='/' className='rm-pad'><h2 className='logo'>Read-It</h2></Link>
        <div className="search-bar">
            <input type="text" name='search' placeholder='search' />
            <Search />
        </div>
        <ul>
            <Link to='/shop' className='hover-link'><li>Shop</li></Link>
            <Link to='/categories' className='hover-link'><li>Categories</li></Link>
            <Link to='/account' className='hover-link'>
                <li>
                    <UserRound />
                </li>
            </Link>
        </ul>
        <div className="nav-icons">
            <Search size={18}/>
            <Menu size={18} onClick={handleShowMenu}/>
        </div>

        {showMenu && <SideMenu setShowMenu={setShowMenu} />}
        
    </div>
  )
}

export default Navbar