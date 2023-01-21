import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FormBikeAndScooter from '../pages/allForms/FormBikeAndScooter'
import PostAds from '../pages/postProducts/PostAds'


const AllRoutes = () => {
  return (
    <Routes>
      
        <Route path='/' element={<h1>Home page</h1>}></Route>
        <Route path='/postads' element={<PostAds/>}></Route>
        <Route path='/postads/bike' element={<FormBikeAndScooter/>}></Route>
    </Routes>
  )
}

export default AllRoutes