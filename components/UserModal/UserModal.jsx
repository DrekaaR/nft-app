import { ReactComponent as TokenIcon } from "assets/images/icons/balances/nfo-token.svg";
import { ReactComponent as ShapeIcon } from "assets/images/icons/balances/shapes.svg";
import { ReactComponent as ShoesIcon } from "assets/images/icons/balances/shoes.svg";
import { ReactComponent as EditIcon } from "assets/images/icons/edit-user.svg";
import s from "components/UserModal/UserModal.module.scss";
import useInput from "hooks/useInput";
import React, { useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import MyTextarea from "../UI/MyTextarea/MyTextarea";

const balance = {
  shapes: 12,
  tokens: 421,
  sneakers: 4,
};

const user = {
  wallet:
    "0xF3D23a31242afgFo932JFGkaS889sfa4f3DA3D23a31242afgFo932JFGkaS889sfa4",
  name: "Alex",
  email: "hardcandy2t@gmail.com",
  address: "832  AVENUE OF THE AMERICAS NEW YORK NY 10001-6308 USA",
};

const UserModal = () => {
  const [isFormDisabled, setFormDisabled] = useState(true);

  const name = useInput(user?.name, { isEmpty: true });
  const email = useInput(user?.email, { isEmpty: true, isEmail: true });
  const address = useInput(user?.address, { isEmpty: true });

  const logoutHandler = () => alert("Logout");

  const updateUserData = () => setFormDisabled(!isFormDisabled);

  return (
    <>
      <div className={s.title}>Your account</div>
      <div className={s.balance}>
        <div className={s.balanceItem}>
          <div className={s.balanceLabel}>
            <ShapeIcon /> Shapes
          </div>
          <div className={s.balanceValue}>{balance.shapes}</div>
        </div>
        <div className={s.balanceItem}>
          <div className={s.balanceLabel}>
            <TokenIcon /> Tokens
          </div>
          <div className={s.balanceValue}>{balance.tokens}</div>
        </div>
        <div className={s.balanceItem}>
          <div className={s.balanceLabel}>
            <ShoesIcon /> Sneakers
          </div>
          <div className={s.balanceValue}>{balance.sneakers}</div>
        </div>
      </div>

      <div className={s.form}>
        <MyInput readOnly label="Wallet" value={user?.wallet} />
        <MyInput
          disabled={isFormDisabled}
          label="Username"
          value={name.value}
          onChange={name.onChange}
        />
        <MyInput
          disabled={isFormDisabled}
          label="Email"
          value={email.value}
          onChange={email.onChange}
        />
        <MyTextarea
          disabled={isFormDisabled}
          label="Delivery address"
          value={address.value}
          onChange={address.onChange}
        />
      </div>

      <div className={s.actions}>
        <MyButton
          disabled={
            !isFormDisabled &&
            (!name.inputValid || !email.inputValid || !address.inputValid)
          }
          onClick={updateUserData}
        >
          {isFormDisabled ? <EditIcon /> : "Confirm"}
        </MyButton>
        <MyButton onClick={logoutHandler}>Logout</MyButton>
      </div>
    </>
  );
};

export default UserModal;
