import React from 'react' 
import Navbar from './components/navbar/Navbar' 
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import Cart from './pages/cart/cart'
import PlaceOrder from './pages/placeorder/placeorder'
import Footer from './components/footer/footer'
import Loginpopup from './components/login/login'

function App() {
  const[showlogin, setShowlogin] = React.useState(false)
  return (
    <>
    {showlogin?<Loginpopup  setShowlogin={setShowlogin}/>:<></>}
       <div className='app'>   
      <Navbar 
      setShowlogin={setShowlogin}
      />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/Order' element={<PlaceOrder/>} />
      </Routes>
    </div>
    <Footer />
    </>
 
  )
} 
export default App 