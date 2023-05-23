import React from "react";
import s from "components/Navbar/Navbar.module.scss";
import {NavLink} from "react-router-dom";
import {rippleEffect} from "utils/rippleEffect";


const Navbar = () => {
   const navItems = [
      {to: "/", value: "Main/Feed"},
      {to: "/collections", value: "Collections"},
      {to: "/NFTs", value: "NFTs"},
      {to: "/factory", value: "Factory"},
      {to: "/socials", value: "Socials"},
   ];

   return (
      <div className={s.navbar}>
         <div className={s.items}>
            {navItems.map((item) => (
               <NavLink
                  key={item.to}
                  onClick={(e) => rippleEffect(e)}
                  to={item.to}
                  className={(link) =>
                     link.isActive ? [s.active, s.link].join(" ") : s.link
                  }
               >
                  {item.value}
               </NavLink>
            ))}
         </div>
      </div>
   );
};

export default Navbar;
