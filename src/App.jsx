import React from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Navbar from './components/Navbar'
import store from './store/store'
import { Provider } from 'react-redux'
const App = () => {
  return (
    
      <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      </Provider>
    
  )
}

export default App