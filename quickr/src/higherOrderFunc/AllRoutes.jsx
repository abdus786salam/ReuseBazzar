import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PostAds from '../pages/postProducts/PostAds'
import SinglePage from '../pages/singlePage/SinglePage'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/postads' element={<PostAds/>}></Route>
        <Route path='/' element={<SinglePage/>}></Route>
    </Routes>
  )
}

export default AllRoutes