import { ReactComponent as SuccessIcon } from "assets/images/icons/success.svg";
import MyButton from "components/UI/MyButton/MyButton";
import MyInput from "components/UI/MyInput/MyInput";
import MyModal from "components/UI/MyModal/MyModal";
import MySelect from "components/UI/MySelect/MySelect";
import MyTextarea from "components/UI/MyTextarea/MyTextarea";
import { FactoryContext } from "contexts/FactoryContext";
import useInput from "hooks/useInput";
import s from "pages/factory/OrderModal/OrderModal.module.scss";
import React, { useContext, useState } from "react";

const sizesMap = ["9 us", "10 us", "11 us", "12 us", "13 us"];

const OrderModal = () => {
  const { factoryState, setFactoryState } = useContext(FactoryContext);
  const [size, setSize] = useState(sizesMap[0]);
  const [successScreenOpen, setSuccessScreenOpen] = useState(false);

  const email = useInput("", { isEmpty: true, isEmail: true });
  const message = useInput("");
  const address = useInput("", { isEmpty: true, minlength: 20 });

  const orderHandler = () => {
    setSuccessScreenOpen(true);
  };

  const closeModal = () => {
    setFactoryState({
      ...factoryState,
      orderModalVisible: false,
    });
  };

  return (
    <MyModal isOpen={factoryState.orderModalVisible} setOpen={closeModal}>
      <div className={s.title}>
        {successScreenOpen ? "Successful order" : "Confirm your choice"}
      </div>

      {successScreenOpen ? (
        // Success screen
        <div className={s.successScreen}>
          <SuccessIcon />
          <div className={s.successTitle}>Thank you!</div>
          <div className={s.successText}>We received your order</div>
          <MyButton onClick={closeModal}>Got it!</MyButton>
        </div>
      ) : (
        // Order form
        <div className={s.gridContainer}>
          <div>
            <div className={s.row}>
              <MySelect
                label="Size*"
                value={size}
                setValue={setSize}
                options={sizesMap}
              />
              <MyInput
                label="Email*"
                placeholder="Email address"
                value={email.value}
                onChange={email.onChange}
                onBlur={email.onBlur}
              />
            </div>

            <MyTextarea
              label="Delivery address*"
              placeholder="Delivery address"
              value={address.value}
              onChange={address.onChange}
            />

            <MyTextarea
              label="Message"
              placeholder="Message"
              value={message.value}
              onChange={message.onChange}
            />

            <div className={s.actions}>
              <span className={s.text}>Net Cost (est.) 500</span>
              <MyButton
                disabled={!email.inputValid || !address.inputValid}
                onClick={orderHandler}
                style={{ width: "100%" }}
              >
                Order
              </MyButton>
              {email.isDirty && email.isEmpty && (
                <div className="error">{email.emptyErrorText}</div>
              )}
            </div>
          </div>

          <div className={s.preview}>
            <img src={factoryState?.selectedToken?.image} alt="selected shoe" />
          </div>
        </div>
      )}
    </MyModal>
  );
};

export default OrderModal;
