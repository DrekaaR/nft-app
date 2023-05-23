import React from "react";
import s from "components/UI/Tabs/TabNav/TabNav.module.scss";

const TabNav = ({ tabs, activeTab, setActiveTab, width }) => {
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className={s.tabsButtons} style={{ maxWidth: width }}>
      {tabs.map((tab, index) => {
        const isActive = activeTab === index ? s.active : " ";
        return (
          <button
            key={tab.label}
            className={isActive}
            onClick={() => handleTabClick(index)}
          >
            <span>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default TabNav;
