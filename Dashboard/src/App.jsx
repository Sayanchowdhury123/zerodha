import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Orders from './components/Orders'
import Login from './components/Login'
import Private from './components/Private'
import { Generalcontextprovider } from './components/Generalcontext'
function App() {


  return (
    <>
   <Generalcontextprovider>

   <Routes>
     
    <Route path='/login' element={<Login/>} />

<Route element={<Private/>}>
<Route path='/*' element={<Home/>} />
</Route>
   
    </Routes>


   </Generalcontextprovider>
 
 

     
    </>
  )
}

export default App
