import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PostAds from '../pages/postProducts/PostAds'


const AllRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<h2>home page</h2>}></Route>
        <Route path='/postads' element={<PostAds/>}></Route>
    </Routes>
  )
}

export default AllRoutes