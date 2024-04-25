import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

function Navbar({ setShowlogin}) {
const [menu, setMenu] = React.useState("Home")

  return (
    <div className='navbar'> 
       <Link to="/"><img src={assets.logo}  alt='logo' className='logo'/></Link>
       <ul className='navbar-menu'>
            <li> <Link to="/" onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</Link></li>
            <a  href='#explore-menu'><li onClick={()=>{setMenu("Menu")}} className={menu==="Menu"?"active":""}>Menu</li></a>
            <a  href='#app-download'><li onClick={()=>{setMenu("Mobail-app")}} className={menu==="Mobail-app"?"active":""}>Mobail-app</li></a>
            <a  href='#footer'><li onClick={()=>{setMenu("Contact")}}className={menu==="Contact"?"active":""}>Contact</li></a>
       </ul>
       <div className='navbar-right'>
        <img src={assets.search_icon} alt='search' />
        <div className='navbar-search-icon'>
            <Link to="/cart"><img src={assets.basket_icon} alt='basket' /></Link>
            <div className='Dot'></div >
        </div>
        <button onClick={()=>setShowlogin(true)}>sign-in</button>
       </div>
    </div>
  )
}

export default Navbar
