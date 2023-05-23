import defaultSticker from "assets/images/header-stickers/metaverse-sticker.png";
import { ReactComponent as NfoTokenIcon } from "assets/images/icons/balances/nfo-token.svg";
import { ReactComponent as UsdcIcon } from "assets/images/icons/balances/usdc.svg";
import { ReactComponent as InstagramIcon } from "assets/images/icons/socials/instagram.svg";
import openseaIcon from "assets/images/icons/socials/opensea.svg";
import { ReactComponent as TikTokIcon } from "assets/images/icons/socials/tiktok.svg";
import { ReactComponent as TwitterIcon } from "assets/images/icons/socials/twitter.svg";
import defaultVideo from "assets/videos/main-scene.webm";
import MyButton from "components/UI/MyButton/MyButton";
import bs from "components/UI/MyButton/MyButton.module.scss";
import MyButtonLink from "components/UI/MyButton/MyButtonLink";
import Wrapper from "components/UI/Wrapper/Wrapper";
import Container from "components/UI/Сontainer/Container";
import { collections } from "config/collections";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { updateAppBackground, updateHeaderSticker } from "store/actions";
import { Store } from "store/store-reducer";
import s from "./Collection.module.scss";

const socialLinks = [
  { to: "link1", icon: <InstagramIcon />, title: "Instagram" },
  { to: "link2", icon: <TikTokIcon />, title: "Tiktok" },
  { to: "link3", icon: <TwitterIcon />, title: "Twitter" },
];

const Collection = () => {
  const { dispatch } = useContext(Store);
  const [collection, setCollection] = useState({});

  const isNFOClaim = collection?.price?.nfoClaim;
  let timer;

  useEffect(() => {
    setCollName().then(() => setCollAssets());
    return () => {
      resetUIState();
    };
  }, [collection]);

  function resetUIState() {
    updateHeaderSticker(dispatch, {
      src: defaultSticker,
      active: false,
    });
    updateAppBackground(dispatch, defaultVideo);
    setCollection(null);
    clearTimeout(timer);
  }

  async function setCollName() {
    const url = document.location.pathname.split("/");
    const str = url[url.length - 1];
    const chosenCollection = collections.find((el) => {
      const name = el.name.split(" ")[0];
      return str.includes(name);
    });
    setCollection(chosenCollection);
  }

  function setCollAssets() {
    const background = collection.background;
    if (collection.logo) {
      updateHeaderSticker(dispatch, {
        src: collection.logo,
        active: true,
      });
    }
    if (background) {
      if (background.loopVideo) {
        updateAppBackground(dispatch, background.video);
        timer = setTimeout(() => {
          updateAppBackground(dispatch, background.loopVideo);
        }, 10000);
      } else {
        updateAppBackground(dispatch, background.video);
      }
    }
  }

  const InfoItem = ({ title, children }) => (
    <div className={s.collInfoItem}>
      <div className={s.collInfoTitle}>{title}</div>
      {children}
    </div>
  );

  return (
    <Container>
      <Wrapper width={880} style={{ marginTop: "3vh" }}>
        {collection.name && (
          <>
            {/* Title and back button */}
            <div className={s.collHeader}>
              <div className={s.collTitle}>
                {collection.name}
                <span>
                  by <strong>{collection.author}</strong>
                </span>
              </div>

              <MyButtonLink backArrow to="/collections">
                back to collections
              </MyButtonLink>
            </div>

            {/* Main content - start */}
            <div className={s.collContent}>
              <div className={s.collInfo}>
                <div className={s.collImage}>
                  <img src={collection.image} alt="collection image" />
                </div>
                <InfoItem title="Release Date">{collection.date}</InfoItem>

                <InfoItem title="Supply">{collection.supply}</InfoItem>

                <InfoItem title="Chain">
                  <div className={s.collInfoValue}>
                    <img src={collection.chain.icon} alt="chain icon" />
                    {collection.chain.name}
                  </div>
                </InfoItem>

                <InfoItem title="Claim cost">
                  <div className={s.collInfoValue}>
                    {isNFOClaim ? <NfoTokenIcon /> : <UsdcIcon />}
                    {collection.price.value}
                    <span>{isNFOClaim ? "nfo" : "usdc"}</span>
                  </div>
                </InfoItem>
              </div>

              <div className={s.socials}>
                {socialLinks.map((socialLink) => (
                  <MyButtonLink key={socialLink.to} to={socialLink.to}>
                    {socialLink.icon}
                    {socialLink.title}
                  </MyButtonLink>
                ))}
              </div>

              <div className={s.collText}>
                {collection.text &&
                  collection.text.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className={s.collActions}>
              <NavLink to="/factory" className={bs.button}>
                To Factory
              </NavLink>

              <MyButton href={collection.openseaLink}>
                <img src={openseaIcon} alt="opensea icon" />
                Opensea
              </MyButton>
            </div>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Collection;
