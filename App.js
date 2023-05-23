import AppBackground from "components/AppBackground/AppBackground";
import Header from "components/Header/Header";
import Navbar from "components/Navbar/Navbar";
import StatusModal from "components/UI/StatusModal/StatusModal";
import CursorCustomizer from "components/CursorCustomizer/CursorCustomizer";
import Collections from "pages/collections";
import Collection from "pages/collections/Collection/Collection";
import Factory from "pages/factory";
import Main from "pages/main";
import NFTs from "pages/NFTs";
import Socials from "pages/socials";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "styles/_global.scss";
import "styles/index.scss";
import "styles/reset.scss";
import { StoreProvider } from "store/store-reducer";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <CursorCustomizer />
        <StatusModal />
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/collections" element={<Collections />} />
            <Route
              path="/collections/:collectionName"
              element={<Collection />}
            />
            <Route path="/NFTs" element={<NFTs />} />
            <Route path="/factory" element={<Factory />} />
            <Route path="/socials" element={<Socials />} />
          </Routes>
          <Navbar />
          <AppBackground />
        </div>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
