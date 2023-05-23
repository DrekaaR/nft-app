import TabNav from "components/UI/Tabs/TabNav/TabNav";
import Wrapper from "components/UI/Wrapper/Wrapper";
import Container from "components/UI/Сontainer/Container";
import FactoryContextProvider from "contexts/FactoryContext";
import FactoryGuide from "pages/factory/FactoryGuide";
import React, { useState } from "react";
import Market from "./Market/Market";
import Factory from "./TabFactory/TabFactory";

const FactoryPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "factory", content: <Factory /> },
    { label: "market", content: <Market /> },
    { label: "?", content: <FactoryGuide /> },
  ];

  return (
    <FactoryContextProvider>
      <Container style={{ marginTop: "3vh" }}>
        <TabNav tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <Wrapper height={620} variant="tabs">
          {tabs[activeTab].content}
        </Wrapper>
      </Container>
    </FactoryContextProvider>
  );
};

export default FactoryPage;
