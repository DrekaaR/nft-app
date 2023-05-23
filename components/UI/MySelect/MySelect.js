import ClickAwayListener from "@mui/base/ClickAwayListener";
import React, {useState} from "react";
import s from "components/UI/MySelect/MySelect.module.scss";

// Assets
import {ReactComponent as ArrowDown} from "assets/images/icons/arrow-dropdown.svg";

const MySelect = ({value, setValue, options, label}) => {
   const [isOpen, setIsOpen] = useState(false);

   function openHandler() {
      isOpen ? setIsOpen(false) : setIsOpen(true);
   }

   function setValueHandler(e) {
      setValue(e.target.value);
      setIsOpen(false);
   }

   return (
      <div>
         {label && <div className={s.label}>{label}</div>}
         <div className={s.select}>
            <button
               onClick={openHandler}
               className={isOpen ? s.selectValue + " " + s.active : s.selectValue}
            >
               <span>{value}</span>
               <ArrowDown/>
            </button>
            {isOpen && (
               <ClickAwayListener onClickAway={openHandler}>
                  <div className={s.options}>
                     {options.map((option) => (
                        <button
                           className={s.option}
                           key={option}
                           value={option}
                           onClick={setValueHandler}
                        >
                           {option}
                        </button>
                     ))}
                  </div>
               </ClickAwayListener>
            )}
         </div>
      </div>
   );
};

export default MySelect;
