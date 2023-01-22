import react from "react";
import Card from "./card";
import "../css/MostPopular.css";
import { Link, useParams } from "react-router-dom";
export const MostPopular = () => {
  const {param}=useParams()

  const data = [
    {
      key:"bikes",
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
      category: "All Furniture",
    },
    {
      key:"laptops",
      img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/all_electonics_desktop.png",
      category: "Electronics",
    },
    {
      key:"mobiles",
      img: "https://m.media-amazon.com/images/I/71KCwNV6MuL._SL1500_.jpg",
      category: "Phone",
    },
    {
      key:"bikes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nw2IwaKP5ua4RyFOE-CKME29IwCJqcXGAQ&usqp=CAU",
      category: "Bike",
    },
    {
      key:"cars",
      img: "https://cars.tatamotors.com/images/dark/altroz-home.jpg",
      category: "Car",
    },
    {
      key:"refrigerator",
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/led-tv.png",
      category: "TVs",
    },
    {
      key:"refrigerator",
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/laptops.png",
      category: "Laptops",
    },
    {
      key:"refrigerator",
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/refrigerator.png",
      category: "Refrigerator",
    },
    {
      key:"refrigerator",
      img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Recliners_desktop.png",
      category: "Rcliners",
    },
    {
      key:"refrigerator",
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/dining-tables.png",
      category: "Dining Tables",
    },
    {
      key:"refrigerator",
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/office-furnitures.png",
      category: "Office Furnitures",
    },
    {
      key:"refrigerator",
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/washing-machine.png",
      category: "Washing Machine",
    },
    {
      key:"refrigerator",
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/air-conditioner.png",
      category: "Air Conditioners",
    },
    {
      key:"refrigerator",
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/speakers.png",
      category: "Speakers",
    },
    {
      key:"refrigerator",
      img: "https://teja9.kuikr.com/escrow/assets/image/assured_landing_page/Gaming_Consoles_desktop.png",
      category: "Gaming Consoles",
    },
  ];
  let box = document.querySelector(".product-container");
  console.log(box)

  const btnpressprev = () => {
    let width = box.clientWidth;
    // console.log(width)
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };


  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };

  return (

    <>
    
      <div className="product-Crousel">
       <p style={{textAlign:"left",fontWeight:"bold",color:"black",fontSize:"20px"}}> Most Popular Products</p> 
        <button onClick={btnpressprev} className="pre">
          <p>&lt;</p>
        </button>
        <button onClick={btnpressnext} className="next">
          <p>&gt;</p>
        </button>

        <div className="product-container"  style={{backgroundColor:"white"}}>
          {data.map((e, i) => {
            
            return <Link to={`/${e.key}`}>
            <Card key={i + 1} img={e.img} category={e.category} />
                </Link>;
          })}
        </div>
      </div>
    </>
  );
};
