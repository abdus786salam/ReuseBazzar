import React from "react";
import Responsive from "../../Components/HomePage/Adds";
import { Alert } from "../../Components/HomePage/Alert";
import { Browsebycategory } from "../../Components/HomePage/BrowseByCatogery";
import { BuySell } from "../../Components/HomePage/buySell";
import { Comment } from "../../Components/HomePage/Comment";
import Electronics from "../../Components/HomePage/Electronics";
import { Footer } from "../../Components/HomePage/footer";
import LifeStyle from "../../Components/HomePage/HomeandLifeStyle";
import Mobile from "../../Components/HomePage/MobileTablets";
import { MostPopular } from "../../Components/HomePage/MostPopularProduct";

export const Home = () => {
  return (
    <>
      <div style={{backgroundColor:"#F3F3F3"}}>
        <MostPopular />
        <BuySell />
        <Responsive />
        <Mobile />
        <LifeStyle/>
        <Electronics/>
        <Browsebycategory />
        <Alert />
        <Comment />
        <Footer />
      </div>
    </>
  );
};
