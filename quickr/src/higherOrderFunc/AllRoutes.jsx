import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cartdata from '../Components/cart/cart'
import Cart from '../Components/cart/cart'
import { Home } from '../pages/postProducts/Home'

import PostAds from '../pages/postProducts/PostAds'
import FormBikeAndScooter from "../pages/allForms/FormBikeAndScooter"
import { Booklist } from '../Components/HomePage/productlist'
import { Subcategory } from '../Components/HomePage/subcategory'
import SinglePage from '../pages/singlePage/SinglePage'


const AllRoutes = () => {
  return (
    <Routes>


      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cartdata/>}/>
      <Route path="/:param" element={<Subcategory/>}/>
      <Route path="/:param/:id" element={<SinglePage/>}/>
        <Route path='/postads' element={<PostAds/>}></Route>
        <Route path='/postads/bike' element={<FormBikeAndScooter/>}></Route>
    </Routes>
  )
}

export default AllRoutes