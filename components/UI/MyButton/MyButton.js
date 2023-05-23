import s from "components/UI/MyButton/MyButton.module.scss";
import React from "react";

const MyButton = ({href, children, ...props}) => {
   function Button() {
      if (href) {
         return (
            <a href={href} target="_blank" className={[s.button, s.link].join(" ")} {...props}>
               {children}
            </a>
         )
      }
      return (
         <button className={s.button} {...props}>
            {children}
         </button>
      )
   }

   return <Button/>;
};

export default MyButton;
