import React, { Component } from "react";
import Slider from "react-slick";
import "../css/slick.css";
import "../css/slick-theam.css";

const data = [
  {
    img: "https://teja9.kuikr.com/i5/20220816/Baby-cribs---high-chairs-VB201705171774173-ak_LWBP1724250427-1660647397.jpeg",
    name: "baby crips+high ",
    day: "156 day ago",
  },
  {
    img: "https://teja10.kuikr.com/i5/20220923/premium-lucky-all-tipe-golden-fancy-vip-number-in-prepaid-VB201705171774173-ak_LWBP590116402-1663939308.jpeg",
    name: "vip number ",
    day: "156 day ago",
  },
  {
    img: "https://teja8.kuikr.com/i4/20221009/Queen-Size-Bed--with-Storage--Available-VB201705171774173-ak_LWBP73886778-1665301618.jpeg",
    name: "Queen size bed",
    day: "156 day ago",
  },
  {
    img: "https://teja10.kuikr.com/i5/20220822/Macbook-Pro-8Gb-Ram-Intel-Corei5-Processor-500Gb-Hard-Disk-In-Perfect-Working-Condition-With-Charger-VB201705171774173-ak_LWBP1220686324-1661151214.jpeg",
    name: "mackbook",
    day: "156 day ago",
  },
  {
    img: "https://teja10.kuikr.com/i4/20220707/Feather-lite-all-leather-3-2-sofa-VB201705171774173-ak_LWBP1658209956-1657193742.jpeg",
    name: "Fethure lite all",
    day: "156 day ago",
  },
  {
    img: "https://teja10.kuikr.com/i4/20220818/Baby-cot-with-mattress-for-sale-VB201705171774173-ak_LWBP1055452692-1660820941.png",
    name: "baby coat",
    day: "156 day ago",
  },
  {
    img: "https://teja9.kuikr.com/i6/20220720/2021-Apple-iPad-Pro-with-Apple-M1-chip--11-inch-2796-cm--Wi-Fi--128GB----Space-Grey--3rd-Generation--Model-NameIPad-Pro-VB201705171774173-ak_LWBP2004545801-1658297560.jpeg",
    name: "Apple i-pad",
    day: "156 day ago",
  },
  {
    img: "https://teja9.kuikr.com/i6/20220708/AC-on-Rent-in-Delhi-and-NCR-VB201705171774173-ak_WBP4276370-1657280720.png",
    name: "AC rent in delhi",
    day: "156 day ago",
  },
  {
    img: "https://teja10.kuikr.com/i4/20221111/9319976410-Camera-Brand-New-Condition-WhatsApp-and-call-me--Best-Discount-offer--VB201705171774173-ak_LWBP1661958168-1668139311.jpeg",
    name: "Camera",
    day: "156 day ago",
  },
];
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings} style={{ width: "70%", marginLeft:"10%"}}>
        
            {data.map((el)=>{

                return<div style={{border:"9px solid blue"}}><img style={{width:"70%",height:"180px"}}src={el.img}/>
                <p style={{color:"black",overflow:"hidden",marginRight:"50px",fontWeight:"bold"}}>{el.name}</p>
                <p style={{textAlign:"center",color:"gray"}}>{el.day}</p>
                </div>
            })}
        
        </Slider>
      </div>
    );
  }
}
