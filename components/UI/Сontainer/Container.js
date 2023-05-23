import React from 'react';
import s from "components/UI/Сontainer/Container.module.scss"
import {motion, AnimatePresence} from "framer-motion"

const Container = ({children, ...props}) => {
   return (
      <AnimatePresence>
         <motion.div
            {...props}
            className={s.container}
            initial={{x: "20%", scale: 0.8, opacity: 0}}
            animate={{x: "0", scale: 1, opacity: 1}}
            transition={{ type: "spring", duration: 0.8, bounce: 0.25 }}
         >
            {children}
         </motion.div>
      </AnimatePresence>
   );
};

export default Container;