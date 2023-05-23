import React from "react";
import s from "components/UI/MyInput/MyInput.module.scss";

const MyInput = ({ children, isError, label, ...props }) => {
  return (
    <div className={isError ? `${s.formError} ${s.input}` : s.input}>
      {label && <div className={s.label}>{label}</div>}
      <input {...props} />
      {children}
    </div>
  );
};

export default MyInput;
