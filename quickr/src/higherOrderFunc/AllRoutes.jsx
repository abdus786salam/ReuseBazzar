import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/postProducts/Home'
import PostAds from '../pages/postProducts/PostAds'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path='/postads' element={<PostAds/>}></Route>
    </Routes>
  )
}

export default AllRoutes