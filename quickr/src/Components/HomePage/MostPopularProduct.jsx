import react from "react";
import Card from "./card";
import "../css/MostPopular.css";
export const MostPopular = () => {
  const data = [
    {
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/other-furnitures.png",
      category: "All Furniture",
    },
    {
      img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/all_electonics_desktop.png",
      category: "All Electronics",
    },
    {
      img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/sofa_sets_desktop.png",
      category: "Sofa sets",
    },
    {
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/bed.png",
      category: "Bed sets",
    },
    {
      img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Wardrobes_desktop.png",
      category: "Wardrobes",
    },
    {
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/led-tv.png",
      category: "TVs",
    },
    {
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/laptops.png",
      category: "Laptops",
    },
    {
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/refrigerator.png",
      category: "Refrigerator",
    },
    {
      img: "https://teja10.kuikr.com/escrow/assets/image/assured_landing_page/Recliners_desktop.png",
      category: "Rcliners",
    },
    {
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/dining-tables.png",
      category: "Dining Tables",
    },
    {
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/office-furnitures.png",
      category: "Office Furnitures",
    },
    {
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/washing-machine.png",
      category: "Washing Machine",
    },
    {
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/air-conditioner.png",
      category: "Air Conditioners",
    },
    {
      img: "https://teja10.kuikr.com/escrow/assets/image/certified_landing_page/electronics/speakers.png",
      category: "Speakers",
    },
    {
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
            
            return <Card key={i + 1} img={e.img} category={e.category} />;
          })}
        </div>
      </div>
    </>
  );
};
