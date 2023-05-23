import TabNav from "components/UI/Tabs/TabNav/TabNav";
import Wrapper from "components/UI/Wrapper/Wrapper";
import Container from "components/UI/Сontainer/Container";
import MergeContextProvider from "contexts/MergeContext";
import NFTsGuide from "pages/NFTs/NFTsGuide";
import Merge from "pages/NFTs/Merge/Merge";
import Mint from "pages/NFTs/Mint/Mint";
import Stake from "pages/NFTs/Stake/Stake";
import React, { useState } from "react";

const NFTsPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "mint", content: <Mint setTab={setActiveTab} /> },
    { label: "stake", content: <Stake /> },
    {
      label: "merge",
      content: (
        <MergeContextProvider>
          <Merge />
        </MergeContextProvider>
      ),
    },
    { label: "?", content: <NFTsGuide /> },
  ];

  return (
    <Container style={{ marginTop: "3vh" }}>
      <TabNav
        width={880}
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Wrapper width={880} height={650} variant="tabs">
        {tabs[activeTab].content}
      </Wrapper>
    </Container>
  );
};

export default NFTsPage;
