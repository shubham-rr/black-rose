import React, { useState } from 'react'
import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'

const App = () => {

  const [token, setToken] = useState('')



  return (
    <div className='bg-gray-50 min-h-screen'>
      {token === ""
        ? <Login />
        :
        <>
          <Navbar />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>

            </div>
            <Routes>
              <Route path='/add' element={<Add />} />
              <Route path='/list' element={<List />} />
              <Route path='/orders' element={<Orders />} />
            </Routes>
          </div>
        </>}

    </div>

  )
}

export default App
