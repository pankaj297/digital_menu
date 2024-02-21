import React, { useState } from 'react';
import "./style.css";
import Menu from "./menuApi";
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList = [
  "All",
  ...new Set(Menu.map((curElem) => {
  return curElem.category;
})
),
];

console.log(uniqueList);

const Resturant = () => {

    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);



    const filterItems = (cate) => {

      if(cate === "All") {
         setMenuData(Menu);
         return;
      }

      const updatedList = Menu.filter((CElement) => {
           return CElement.category === cate;
      });

      setMenuData(updatedList);
    };


  return (
    <>
        <Navbar filterItems= {filterItems} menuList = {menuList}/>
        <MenuCard menuDataAll={menuData}/>
    </>
  );
};

export default Resturant;
