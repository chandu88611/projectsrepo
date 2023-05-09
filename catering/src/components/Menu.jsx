import { Box } from "@mui/system";
import React, { useState,useEffect } from "react";
import "./Home.css";
import { useLocation } from 'react-router-dom';

function Menu() {

  const location = useLocation();
useEffect(() => {
  document.title = ` saikailashdhaba ${location.pathname}`;
}, [location]);
  const [menu1, setMenu1] = useState(true);
  const [menu2, setMenu2] = useState(false);
  const [menu3, setMenu3] = useState(false);
  const [menu4, setMenu4] = useState(false);
  const [menu5, setMenu5] = useState(false);
  const [menu6, setMenu6] = useState(false);
  const [menu7, setMenu7] = useState(false);
  const [menu8, setMenu8] = useState(false);
  const [menu9, setMenu9] = useState(false);
  const [menu10, setMenu10] = useState(false);
  const [menu11, setMenu11] = useState(false);
  const [menu12, setMenu12] = useState(false);
  const [menu13, setMenu13] = useState(false);
  const [menu14, setMenu14] = useState(false);
  const [menu15, setMenu15] = useState(false);
  const [menu16, setMenu16] = useState(false);
  const [menu17, setMenu17] = useState(false);

  const Noodles = [
    { Food: "Cream of Tomato Soup ", P1: "120 " },
    { Food: "Veg Corn Soup", P1: "120 " },
    { Food: "Sweet Corn Soup", P1: "120 " },
    { Food: "Veg Hot & Sour Soup", P1: "120 " },
    { Food: "Veg Manchow Soup", P1: "120 " },
    { Food: " Veg Soft Noodles", P1: "160 " },
    { Food: "Schezwan Noodles", P1: "170 " },
    { Food: "Paneer Noodles", P1: "180 " },
    { Food: "Garlic Noodles", P1: "180 " },
  ];
  const Chineese = [
    { Food: "Veg Manchuria", p1: "140 ", p2: "180 " },
    { Food: "Gobi Manchuria", p1: "150 ", p2: "190 " },
    { Food: "Schezwan Manchuria", p1: "150 ", p2: "190 " },
    { Food: "Baby Corn Manchuria", p1: "160 ", p2: "200 " },
    { Food: "Chilly Baby Corn", p1: "170 ", p2: "210 " },
    { Food: "Baby Corn Majestic	", p1: "180 ", p2: "240 " },
    { Food: "Chilly Potato	", p1: "160 ", p2: "200 " },
    { Food: "Chilly Paneer", p1: "170 ", p2: "220 " },
    { Food: "Paneer Manchuria", p1: "160 ", p2: "210 " },
    { Food: "Paneer Majestic	", p1: "170 ", p2: "220 " },
    { Food: "Dragon Paneer", p1: "190 ", p2: "240 " },
    { Food: "Mushroom Manchuria", p1: "170 ", p2: "210 " },
    { Food: "Chilly Mushroom", p1: "190 ", p2: "240 " },
  ];
  const special = [
    { Food: "Veg65", p1: "140	 ", p2: "180 " },
    { Food: "Aloo 65", p1: "150 ", p2: "190 " },
    { Food: "Gobi 65", p1: "150 ", p2: "190 " },
    { Food: "Paneer 65", p1: "170	", p2: "220 " },
    { Food: "Baby corn 65", p1: "170 ", p2: "230 " },
    { Food: "Mushroom 65", p1: "180 ", p2: "230 " },
    { Food: "Crispy Corn	", p1: " ", p2: "200 " },
    { Food: "Arabian Crunchy Paneer", p1: "250 ", p2: "300 " },
  ];

  const Daal = [
    { Food: "Daal Fry", p1: "110 ", p2: "150 " },
    { Food: "Daal Tadka ", p1: "130 ", p2: "160 " },
    { Food: "Daal Makhani", p1: "140 ", p2: "180 " },
    { Food: "Daal Palak", p1: "120 ", p2: "150 " },
  ];
  const paneer = [
    { Food: "DumPaneer", p1: "210", p2: "260" },
    { Food: "Paneer Nazakat", p1: "210", p2: "260" },
    { Food: "Kundan Paneer", p1: "210", p2: "260" },
    { Food: "Paneer Pahadi Masala", p1: "210", p2: "260" },
    { Food: "Malai Methi Paneer", p1: "210", p2: "260" },
    { Food: "Matka Paneer", p1: "210", p2: "260" },
    { Food: "Angara Paneer", p1: "210", p2: "260" },
    { Food: "Awadi Tawa Paneer", p1: "210", p2: "260" },
    { Food: "Lababdar Paneer", p1: "210", p2: "260" },
  ];
  const vegSpecial = [
    { Food: "Maharaja Veg", p1: "200", p2: "250" },
    { Food: "Hariyali Methi Chaman", p1: "200", p2: "250" },
    { Food: "Veg Nizami Handi", p1: "200", p2: "250" },
    { Food: "Jaipuri Veg", p1: "200", p2: "250" },
    { Food: "Narmada Veg", p1: "200", p2: "250" },
    { Food: "Kailash Special", p1: "250", p2: "300" },
  ];
  const curries = [
    { Food: "Aloo Palak Masala", p1: "140 ", p2: "180 " },
    { Food: "Aloo Gobi Masala", p1: "	140", p2: "	180 " },
    { Food: "Aloo Jeera Dry", p1: "	200", p2: "0" },
    { Food: "Aloo Mutter", p1: "150", p2: "180 " },
    { Food: "Baby Corn Masala", p1: "160 ", p2: "	200" },
    { Food: "Palak Corn Masala", p1: "160	", p2: "200" },
    { Food: "Capsicum Masala", p1: "150	", p2: "190" },
    { Food: "Malai Methi Chaman", p1: "	200 ", p2: "	260" },
    { Food: "Methi Chaman", p1: "160 ", p2: "	210" },
    { Food: " Kadai Veg", p1: "160	", p2: "200" },
    { Food: "Mix-Veg", p1: "	160", p2: "	200" },
    { Food: " Veg Do Pyaza", p1: "	160 ", p2: "	200" },
    { Food: "Veg Kolapuri", p1: "160 ", p2: "	200" },
    { Food: "Veg Chatpata	", p1: "160 ", p2: "	200" },
    { Food: "Corn Mutter Masala", p1: "170", p2: "	210" },
    { Food: "Punjabi Gobi Masala", p1: "180", p2: "	220" },
    { Food: "Tomato Chutney", p1: "120", p2: "	160" },
    { Food: "Tomato Curry", p1: "140	", p2: "180" },
    { Food: "Punjabi Chana Masala", p1: "150	", p2: "190" },
    { Food: "Plain Palak", p1: "120", p2: "	170" },
    { Food: "Palak Paneer", p1: "	150	", p2: "190" },
    { Food: "Paneer Butter Masala", p1: "	150", p2: "	190" },
    { Food: "Paneer Do Pyaza", p1: "160", p2: "	200" },
    { Food: "Paneer Bhurji", p1: "	200" },
    { Food: "Paneer Tikka Masala", p1: "	180	", p2: "240" },
    { Food: "Handi Paneer", p1: "	180", p2: "	240" },
    { Food: "Kadai Paneer", p1: "170	", p2: "210" },
    { Food: "Paneer Keema Masala", p1: "170	", p2: "210" },
    { Food: "Paneer Chatpata", p1: "	170", p2: "	210" },
    { Food: "Lachha Paneer", p1: "170	", p2: "210" },
    { Food: "Shahi Paneer", p1: "	180", p2: "	220" },
    { Food: "Mutter Paneer", p1: "	180	", p2: "220 " },
    { Food: "Butter Masala", p1: "220", p2: "260 " },
    { Food: "Kaju Paneer", p1: "200	", p2: "250" },
    { Food: "Kadai Mushroom", p1: "180", p2: "	220 " },
    { Food: "Mutter Mushroom Masala", p1: "170 ", p2: "	210 " },
    { Food: "Mushroom Masala", p1: "	160 ", p2: "	200 " },
    { Food: "Mushroom Paneer", p1: "180 ", p2: "	220 " },
    { Food: "Mushroom Baby Corn", p1: "190 ", p2: "	240 " },
  ];
  const koftacurries = [
    { Food: "Malai Kofta", p1: "160 ", p2: "200" },
    { Food: "Veg Kofta	", p1: " 150 ", p2: "190" },
    { Food: "Paneer Kofta", p1: "180 ", p2: "220" },
    { Food: "Punjabi Kofta", p1: "180 ", p2: "220" },
    { Food: "Bulbul  Kofta", p1: "180 ", p2: "	220" },
  ];
  const Roti = [
    { Food: "Tandoori Roti", p1: "17" },
    { Food: "Butter Roti", p1: "27" },
    { Food: "Kothmir Roti", p1: "27" },
    { Food: "Kothmir Butter Roti", p1: "35" },
    { Food: " Garlic Roti", p1: "40" },
    { Food: "Garlic Butter Roti", p1: "45" },
    { Food: " Rumali Roti", p1: "25" },
    { Food: "Rumali Butter Roti", p1: "30" },
  ];
  const Naan = [
    { Food: "Plain Naan", p1: "	35" },
    { Food: "Butter Naan", p1: "40" },
    { Food: "Kothmir Naan", p1: "40" },
    { Food: "Kothmir Butter Naan", p1: "45" },
    { Food: "Pudina Naan", p1: "40" },
    { Food: "Pudina Butter Naan	", p1: "45" },
    { Food: "Garlic Naan	", p1: "55" },
    { Food: "Garlic Butter Naan	", p1: "60" },
    { Food: "Chatpata Naan", p1: "65" },
  ];
  const paratha = [
    { Food: "Plain Paratha", p1: "50" },
    { Food: "Lachha Paratha", p1: "60" },
    { Food: "Aloo Paratha", p1: "60" },
    { Food: "Onion Paratha	", p1: "60" },
    { Food: "Masala Kulcha", p1: "65" },
    { Food: "Paneer Paratha	", p1: "80" },
    { Food: "Stuff Paratha", p1: "85" },
  ];
  const chineeseMain = [
    { Food: "Veg Manchuria Wet", p1: "200" },
    { Food: "Baby Corn Manchuria Wet", p1: "200" },
    { Food: "Mushroom  Manchuria  Wet", p1: "220" },
    { Food: "Paneer Manchuria  Wet", p1: "230" },
    { Food: "Chilly Paneer Wet", p1: "230" },
  ];
  const Rice = [
    { Food: "Curd Rice", p1: "NO", p2: "140" },
    { Food: "Steam Rice	", p1: "NO", p2: "100" },
    { Food: "Butter Rice", p1: "NO", p2: "120" },
    { Food: "Lemon Rice	", p1: "120", p2: "150" },
    { Food: "Tomato Rice	", p1: "120", p2: "150" },
    { Food: "Jeera Rice", p1: "	120", p2: "160" },
    { Food: "Kaju Jeera Rice", p1: "	150", p2: "200" },
    { Food: "Veg Pulao", p1: "150	", p2: "190" },
    { Food: "Peas Pulao	", p1: "150", p2: "190" },
    { Food: "Paneer Pulao	", p1: "180", p2: "220" },
    { Food: "Kaju Mutter Pulao", p1: "	180	", p2: "240" },
    { Food: "Kaju Pulao", p1: "180", p2: "230" },
  ];
  const biryani = [
    { Food: "Veg Biryani	", p1: "l50	", p2: "190" },
    { Food: "Dom Biryani   ", p1: "160	", p2: "200" },
    { Food: "Veg Handi Biryani", p1: "l60	", p2: "200" },
    { Food: "Paneer Biryani ", p1: "180	", p2: "230" },
    { Food: "Mushroom Biryani ", p1: "190	", p2: "240" },
    { Food: "Kaju Biryani ", p1: "240	", p2: "280" },
    { Food: "Kaju Mutter Biryani ", p1: "240	", p2: "290" },
    { Food: "Hyderabadi Biryani  ", p1: "200	", p2: "240" },
    { Food: "Kailash Special Biryani ", p1: "270	", p2: "320" },
  ];
  const friedrice = [
    { Food: "Veg Fried Rice", p1: "150	", p2: "180" },
    { Food: "Schezwan Fried Rice", p1: "160", p2: "200" },
    { Food: "Masala Fried Rice", p1: "150", p2: "180" },
    { Food: "Mix Fried Rice", p1: "150", p2: "190" },
    { Food: "Paneer Fried Rice", p1: "180", p2: "220" },
    { Food: "Kaju Fried Rice", p1: "180", p2: "240" },
    { Food: "Mushroom Fried Rice", p1: "180", p2: "240" },
    { Food: "Garlic Fried Rice", p1: "160", p2: "200" },
  ];
  const jumbo = [
    { Food: " Paneer Butter Masala (1Kg)", p1: " 450 " },
    { Food: "Family Pack Veg Biryani", p1: "400 " },
    { Food: "Family Pack Handi Biryani", p1: "450 " },
    { Food: "Family Pack Panner Biryani", p1: "500 " },
    { Food: "Family Pack Special Biryani", p1: "600 " },
    { Food: "Jumbo Pack Veg Biryani", p1: "600 " },
    { Food: "Jumbo Pack Handi Biryani", p1: " 650" },
    { Food: "Jumbo Pack Paneer Biryani", p1: "700 " },
    { Food: "Jumbo Pack Special Biryani", p1: "750 " },
  ];
  const papadbeverages = [
    { Food: "Roasted Papad", p1: "30" },
    { Food: "Fry Papad", p1: "35" },
    { Food: "Masala Papad", p1: "50" },
    { Food: "Plain Curd", p1: "50" },
    { Food: "Mix Raita", p1: "60" },
    { Food: "Boondi Raita", p1: "60" },
    { Food: "Onion Raita", p1: "60" },
    { Food: "Butter Milk ", p1: "40" },
    { Food: "Lassi Sweet And Salt ", p1: "50" },
  ];
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: { lg: "column", sm: "row", md: "column" },
          backgroundImage: "url(./images/back.jpg)",
        }}
      >
        <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              lg: "20vw 20vw 20vw 20vw",
              md: "20vw 20vw 20vw 20vw",
            },
            // width: { lg: "100%", sm: "", xs: "30%" },
            // background: "rgb(50, 34, 140);",
            borderBottom: {
              lg: "3px solid black",
              md: "none",
              sm: "none",
              xs: "none",
            },
            alignItems: "center",
            justifyContent: "center",
            // marginLeft: { lg: "10vw", sm: "none" },
          }}
        >
          <a href="#table1" className="anchor">
            <Box
              sx={{
                borderBottom: {
                  lg: "none",
                  md: "none",
                  sm: "1px solid orange",
                  xs: "1px solid black",
                },
                borderRight: {
                  lg: "none",
                  md: "none",
                  sm: "1px solid orange",
                  xs: "1px solid black",
                },
                padding: "2vh",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
                color: menu1 ? "Red" : "black",
                // boxShadow:'1px 1px 5px white'
              }}
              onClick={() => {
                setMenu1(true);
                setMenu2(false);
                setMenu3(false);
                setMenu4(false);
                setMenu5(false);
                setMenu6(false);
                setMenu7(false);
                setMenu8(false);
                setMenu9(false);
                setMenu10(false);
                setMenu11(false);
                setMenu12(false);
                setMenu13(false);
                setMenu14(false);
                setMenu15(false);
                setMenu16(false);
                setMenu17(false);
              
              }}
            >
              {" "}
              Soups and Noodles
            </Box>
          </a>

          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu2 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu2(true);
              setMenu1(false);
              setMenu3(false);
              setMenu4(false);
              setMenu5(false);
              setMenu6(false);
              setMenu7(false);
              setMenu8(false);
              setMenu9(false);
              setMenu10(false);
              setMenu11(false);
              setMenu12(false);
              setMenu13(false);
              setMenu14(false);
              setMenu15(false);
              setMenu16(false);
              setMenu17(false);
            
            }}
          >
            <a href="#table1" className="anchor">
              {" "}
              <span style={{ color: menu2 ? "Red" : "black" }}>
                {" "}
                Chineese Starters
              </span>
            </a>
          </Box>
          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu3 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu3(true);
              setMenu2(false);
              setMenu1(false);
              setMenu4(false);
              setMenu5(false);
              setMenu6(false);
              setMenu7(false);
              setMenu8(false);
              setMenu9(false);
              setMenu10(false);
              setMenu11(false);
              setMenu12(false);
              setMenu13(false);
              setMenu14(false);
              setMenu15(false);
              setMenu16(false);
              setMenu17(false);
            
            }}
          >
            <a href="#table1" className="anchor">
              <span style={{ color: menu3 ? "Red" : "black" }}>
                {" "}
                65 Ki Pasand
              </span>
            </a>
          </Box>
          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },

              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu4 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu4(true);
              setMenu2(false);
              setMenu3(false);
              setMenu1(false);
              setMenu5(false);
              setMenu6(false);
              setMenu7(false);
              setMenu8(false);
              setMenu9(false);
              setMenu10(false);
              setMenu11(false);
              setMenu12(false);
              setMenu13(false);
              setMenu14(false);
              setMenu15(false);
              setMenu16(false);
              setMenu17(false);
            
            }}
          >
            {" "}
            <a href="#table1" className="anchor">
              <span style={{ color: menu4 ? "Red" : "black" }}> Dal Bahar</span>
            </a>
          </Box>

          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu5 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu5(true);
              setMenu2(false);
              setMenu3(false);
              setMenu4(false);
              setMenu1(false);
              setMenu6(false);
              setMenu7(false);
              setMenu8(false);
              setMenu9(false);
              setMenu10(false);
              setMenu11(false);
              setMenu12(false);
              setMenu13(false);
              setMenu14(false);
              setMenu15(false);
              setMenu16(false);
              setMenu17(false);
            
            }}
          >
            {" "}
            <a href="#table1" className="anchor">
              {" "}
              <span style={{ color: menu5 ? "Red" : "black" }}>
                Paneer Special
              </span>
            </a>
          </Box>
          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu6 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu6(true);
              setMenu2(false);
              setMenu3(false);
              setMenu4(false);
              setMenu5(false);
              setMenu1(false);
              setMenu7(false);
              setMenu8(false);
              setMenu9(false);
              setMenu10(false);
              setMenu11(false);
              setMenu12(false);
              setMenu13(false);
              setMenu14(false);
              setMenu15(false);
              setMenu16(false);
              setMenu17(false);
            
            }}
          >
            {" "}
            <a href="#table1" className="anchor">
              <span style={{ color: menu6 ? "Red" : "black" }}>
                {" "}
                Veg Special
              </span>
            </a>
          </Box>
          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu7 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu7(true);
              setMenu2(false);
              setMenu3(false);
              setMenu4(false);
              setMenu5(false);
              setMenu6(false);
              setMenu1(false);
              setMenu8(false);
              setMenu9(false);
              setMenu10(false);
              setMenu11(false);
              setMenu12(false);
              setMenu13(false);
              setMenu14(false);
              setMenu15(false);
              setMenu16(false);
              setMenu17(false);
            
            }}
          >
            {" "}
            <a href="#table1" className="anchor">
              <span style={{ color: menu7 ? "Red" : "black" }}> Curries</span>
            </a>
          </Box>
          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu8 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu8(true);
              setMenu2(false);
              setMenu3(false);
              setMenu4(false);
              setMenu5(false);
              setMenu6(false);
              setMenu7(false);
              setMenu1(false);
              setMenu9(false);
              setMenu10(false);
              setMenu11(false);
              setMenu12(false);
              setMenu13(false);
              setMenu14(false);
              setMenu15(false);
              setMenu16(false);
              setMenu17(false);
            
            }}
          >
            {" "}
            <a href="#table1" className="anchor">
              {" "}
              <span style={{ color: menu8 ? "Red" : "black" }}>
                {" "}
                kofta Curries
              </span>
            </a>
          </Box>
          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu9 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu9(true);
              setMenu2(false);
              setMenu3(false);
              setMenu4(false);
              setMenu5(false);
              setMenu6(false);
              setMenu7(false);
              setMenu8(false);
              setMenu1(false);
              setMenu10(false);
              setMenu11(false);
              setMenu12(false);
              setMenu13(false);
              setMenu14(false);
              setMenu15(false);
              setMenu16(false);
              setMenu17(false);
            
            }}
          >
            {" "}
            <a href="#table1" className="anchor">
              {" "}
              <span style={{ color: menu9 ? "Red" : "black" }}> Roti</span>
            </a>
          </Box>
          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu10 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu10(true);
              setMenu2(false);
              setMenu3(false);
              setMenu4(false);
              setMenu5(false);
              setMenu6(false);
              setMenu7(false);
              setMenu8(false);
              setMenu9(false);
              setMenu1(false);
              setMenu11(false);
              setMenu12(false);
              setMenu13(false);
              setMenu14(false);
              setMenu15(false);
              setMenu16(false);
              setMenu17(false);
            
            }}
          >
            {" "}
            <a href="#table1" className="anchor">
              <span style={{ color: menu10 ? "Red" : "black" }}> Naan</span>
            </a>
          </Box>
          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu11 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu11(true);
              setMenu2(false);
              setMenu3(false);
              setMenu4(false);
              setMenu5(false);
              setMenu6(false);
              setMenu7(false);
              setMenu8(false);
              setMenu9(false);
              setMenu10(false);
              setMenu1(false);
              setMenu12(false);
              setMenu13(false);
              setMenu14(false);
              setMenu15(false);
              setMenu16(false);
              setMenu17(false);
            
            }}
          >
            {" "}
            <a href="#table1" className="anchor">
              <span style={{ color: menu11 ? "Red" : "black" }}> Paratha</span>
            </a>
          </Box>
          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu12 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu12(true);
              setMenu2(false);
              setMenu3(false);
              setMenu4(false);
              setMenu5(false);
              setMenu6(false);
              setMenu7(false);
              setMenu8(false);
              setMenu9(false);
              setMenu10(false);
              setMenu11(false);
              setMenu1(false);
              setMenu13(false);
              setMenu14(false);
              setMenu15(false);
              setMenu16(false);
              setMenu17(false);
            
            }}
          >
            {" "}
            <a href="#table1" className="anchor">
              <span style={{ color: menu12 ? "Red" : "black" }}>
                Chinees Main Course
              </span>
            </a>
          </Box>
          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu13 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu13(true);
              setMenu2(false);
              setMenu3(false);
              setMenu4(false);
              setMenu5(false);
              setMenu6(false);
              setMenu7(false);
              setMenu8(false);
              setMenu9(false);
              setMenu10(false);
              setMenu11(false);
              setMenu12(false);
              setMenu1(false);
              setMenu14(false);
              setMenu15(false);
              setMenu16(false);
              setMenu17(false);
            
            }}
          >
            {" "}
            <a href="#table1" className="anchor">
              <span style={{ color: menu13 ? "Red" : "black" }}>
                Rice and Pulao
              </span>
            </a>
          </Box>
          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu14 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu14(true);
              setMenu2(false);
              setMenu3(false);
              setMenu4(false);
              setMenu5(false);
              setMenu6(false);
              setMenu7(false);
              setMenu8(false);
              setMenu9(false);
              setMenu10(false);
              setMenu11(false);
              setMenu12(false);
              setMenu13(false);
              setMenu1(false);
              setMenu15(false);
              setMenu16(false);
              setMenu17(false);
            
            }}
          >
            {" "}
            <a href="#table1" className="anchor">
              <span style={{ color: menu14 ? "Red" : "black" }}>Biryani</span>
            </a>
          </Box>
          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu15 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu15(true);
              setMenu2(false);
              setMenu3(false);
              setMenu4(false);
              setMenu5(false);
              setMenu6(false);
              setMenu7(false);
              setMenu8(false);
              setMenu9(false);
              setMenu10(false);
              setMenu11(false);
              setMenu12(false);
              setMenu13(false);
              setMenu14(false);
              setMenu1(false);
              setMenu16(false);
              setMenu17(false);
            
            }}
          >
            <a href="#table1" className="anchor">
              <span style={{ color: menu15 ? "Red" : "black" }}>
                Family/Jumbo Packs
              </span>
            </a>
          </Box>

          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu16 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu16(true);
              setMenu2(false);
              setMenu3(false);
              setMenu4(false);
              setMenu5(false);
              setMenu6(false);
              setMenu7(false);
              setMenu8(false);
              setMenu9(false);
              setMenu10(false);
              setMenu11(false);
              setMenu12(false);
              setMenu13(false);
              setMenu14(false);
              setMenu15(false);
              setMenu1(false);
              setMenu17(false);
            
            }}
          >
            <a href="#table1" className="anchor">
              <span style={{ color: menu16 ? "Red" : "black" }}>
                Papad/Raita
              </span>
            </a>
          </Box>
          <Box
            sx={{
              borderBottom: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
               height: {
                lg: "none",
                md: "none",
                sm: "5vh",
                xs: "4vh",
              },
              borderRight: {
                lg: "none",
                md: "none",
                sm: "1px solid orange",
                xs: "1px solid black",
              },
              padding: "2vh",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: { md: "2.5vh", sm: "1.5vh", xs: "1.5vh" },
              color: menu17 ? "Red" : "black",

              // boxShadow:'1px 1px 5px white'
            }}
            onClick={() => {
              setMenu17(true);
              setMenu2(false);
              setMenu3(false);
              setMenu4(false);
              setMenu5(false);
              setMenu6(false);
              setMenu7(false);
              setMenu8(false);
              setMenu9(false);
              setMenu10(false);
              setMenu11(false);
              setMenu12(false);
              setMenu13(false);
              setMenu14(false);
              setMenu15(false);
              setMenu16(false);
              setMenu1(false);
            
            }}
          >
            <a href="#table1" className="anchor">
              {" "}
              <span style={{ color: menu17 ? "Red" : "black" }}>
                Fried Rice
              </span>
            </a>
          </Box>
        </Box></Box>
        <div id="table1"></div>
        <Box className="mainRow">
          <Box className="row">
            <Box
              sx={{
                width: "20vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid",
                padding: "1vh",
                fontWeight: "bold",
                fontFamily: "Roboto",
                color: "Orange",
              }}
            >
              <h3>Food Item</h3>
            </Box>
            <Box
              sx={{
                width: "15vw",
                padding: "1vh",
                borderBottom: "1px solid",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontFamily: "Roboto",
                color: "Orange",
              }}
            >
              {menu1 ||
              menu9 ||
              menu10 ||
              menu11 ||
              menu12 ||
              menu16 ||
              menu17 ? (
                <h3>Price </h3>
              ) : (
                <h3>Half </h3>
              )}
            </Box>
            <Box
              sx={{
                width: "15vw",
                padding: "1vh",
                borderBottom: (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid orange":"none",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                fontFamily: "Roboto",
                color: "Orange",
              }}
            >
              {menu2 ||
              menu3 ||
              menu4 ||
              menu5 ||
              menu6 ||
              menu7 ||
              menu8 ||
              menu13 ||
              menu14 ||
              menu15 ? (
                <h3>Full</h3>
              ) : (
                ""
              )}
            </Box>
          </Box>
          {menu1
            ? Noodles.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.P1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2}
                  </Box>
                </Box>
              ))
            : ""}
          <div></div>
          {menu2
            ? Chineese.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2 + "Rs"}
                  </Box>
                </Box>
              ))
            : ""}
          {menu3
            ? special.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2 + "Rs"}
                  </Box>
                </Box>
              ))
            : ""}
          {menu4
            ? Daal.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2 + "Rs"}
                  </Box>
                </Box>
              ))
            : ""}
          {menu5
            ? paneer.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2 + "Rs"}
                  </Box>
                </Box>
              ))
            : ""}
          {menu6
            ? vegSpecial.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2 + "Rs"}
                  </Box>
                </Box>
              ))
            : ""}
          {menu7
            ? curries.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2 + "Rs"}
                  </Box>
                </Box>
              ))
            : ""}
          {menu8
            ? koftacurries.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2 + "Rs"}
                  </Box>
                </Box>
              ))
            : ""}
          {menu9
            ? Roti.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2}
                  </Box>
                </Box>
              ))
            : ""}
          {menu10
            ? Naan.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2}
                  </Box>
                </Box>
              ))
            : ""}
          {menu11
            ? paratha.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2}
                  </Box>
                </Box>
              ))
            : ""}
          {menu12
            ? chineeseMain.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2}
                  </Box>
                </Box>
              ))
            : ""}
          {menu13
            ? Rice.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2 + "Rs"}
                  </Box>
                </Box>
              ))
            : ""}{" "}
          {menu14
            ? biryani.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2 + "Rs"}
                  </Box>
                </Box>
              ))
            : ""}
          {menu15
            ? friedrice.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2 + "Rs"}
                  </Box>
                </Box>
              ))
            : ""}
          {menu16
            ? jumbo.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom:  (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2}
                  </Box>
                </Box>
              ))
            : ""}
          {menu17
            ? papadbeverages.map((data) => (
                <Box className="row">
                  <Box
                    sx={{
                      width: "20vw",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderBottom: "1px solid",
                      padding: "2vh",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.Food}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: "1px solid",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p1 + "Rs"}
                  </Box>
                  <Box
                    sx={{
                      width: "15vw",
                      padding: "1vh",
                      borderBottom: (menu2 ||
                  menu3 ||
                  menu4 ||
                  menu5 ||
                  menu6 ||
                  menu7 ||
                  menu8 ||
                  menu13 ||
                  menu14 ||
                  menu15)?"1px solid black":"none",      
                             alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      fontFamily: "Roboto",
                    }}
                  >
                    {data.p2}
                  </Box>
                </Box>
              ))
            : ""}
        </Box>
      </Box>
    </div>
  );
}

export default Menu;
