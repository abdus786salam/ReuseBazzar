import React from 'react'
import { Routes, Route } from 'react-router-dom'

import PostAds from '../pages/postProducts/PostAds'
import SinglePage from '../pages/singlePage'


const AllRoutes = () => {
  return (

<Routes>
      <Route path="/" element={<Home/>}/>

        <Route path='/postads' element={<PostAds/>}></Route>

        <Route path='/singlePage' element={<SinglePage/>}></Route>

        <Route path='/postads/bike' element={<FormBikeAndScooter/>}></Route>
        </Routes>
  )
}

export default AllRoutes