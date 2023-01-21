import React from 'react'
import { Routes, Route } from 'react-router-dom'
import FormBikeAndScooter from '../pages/allForms/FormBikeAndScooter'
import PostAds from '../pages/postProducts/PostAds'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/postads' element={<PostAds/>}></Route>
        <Route path='/postads/bike' element={<FormBikeAndScooter/>}></Route>
    </Routes>
  )
}

export default AllRoutes