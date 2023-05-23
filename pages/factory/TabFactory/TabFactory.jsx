import { motion } from "framer-motion";
import OrderModal from "pages/factory/OrderModal/OrderModal";
import Collections from "pages/factory/TabFactory/Collections";
import React, { memo, useState } from "react";
import s from "./TabFactory.module.scss";

const TabFactory = memo(() => {
  const [isAllVisible, setAllVisible] = useState(false);

  return (
    <>
      <OrderModal />

      <div className={s.header}>
        <h2>All Collections</h2>
        <div className={s.headerActions}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className={!isAllVisible ? s.active : ""}
            onClick={() => setAllVisible(false)}
          >
            All
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={isAllVisible ? s.active : ""}
            onClick={() => setAllVisible(true)}
          >
            Available
          </motion.button>
        </div>
      </div>

      <div className={s.body}>
        <Collections isAllVisible={isAllVisible} />
      </div>
    </>
  );
});

export default TabFactory;
