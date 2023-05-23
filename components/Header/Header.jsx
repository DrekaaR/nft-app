import { ReactComponent as NfoTokenIcon } from "assets/images/icons/balances/nfo-token.svg";
import { ReactComponent as ShapeIcon } from "assets/images/icons/balances/shapes.svg";
import { ReactComponent as ShoesIcon } from "assets/images/icons/balances/shoes.svg";
import { ReactComponent as UsdcIcon } from "assets/images/icons/balances/usdc.svg";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import s from "components/Header/Header.module.scss";
import MyModal from "components/UI/MyModal/MyModal";
import UserModal from "components/UserModal/UserModal";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Store } from "store/store-reducer";
import { addressFormatter } from "utils/addressFormatter";

const buttonValue = "0x274C84fa8c035Cce4443805aF5A2D5B3Fe5Ff5a2";

const Header = () => {
  const { state } = useContext(Store);
  const [isLogged, setIsLogged] = useState(true);
  const [userModalOpen, setUserModalOpen] = useState(false);

  const stickerClasses = state.headerSticker.active
    ? `${s.sticker} ${s.active}`
    : s.sticker;

  const headerClasses = state.headerSticker.active
    ? `${s.header} ${s.active}`
    : s.header;

  const balanceData = [
    { icon: <ShapeIcon />, value: 0 },
    { icon: <NfoTokenIcon />, value: 0 },
    { icon: <UsdcIcon />, value: 0 },
    { icon: <ShoesIcon />, value: 0 },
  ];

  return (
    <>
      <MyModal
        isOpen={userModalOpen}
        setOpen={setUserModalOpen}
        variant="small"
        width={650}
      >
        <UserModal />
      </MyModal>

      <header className={headerClasses}>
        <div className={s.headerLogos}>
          <Link to="/" className={s.logo}>
            <Logo />
          </Link>
          <div className={stickerClasses}>
            <img src={state.headerSticker.src} alt="sticker" />
          </div>
        </div>

        <div className={s.actions}>
          {isLogged && (
            <div className={s.balances}>
              {balanceData.map((balance, index) => (
                <div key={index} className={s.balanceItem}>
                  <div className={s.balancesIcon}>{balance.icon}</div>
                  <div className={s.balancesValue}>{balance.value}</div>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => setUserModalOpen(true)}
            className={s.loginButton}
          >
            <span>{isLogged ? addressFormatter(buttonValue) : "Login"}</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
