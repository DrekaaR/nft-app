import React from "react";
import s from "components/UI/MyTextarea/MyTextarea.module.scss";

const MyTextarea = ({ value, isError, label, ...props }) => {
  return (
    <div className={isError ? `${s.formError} ${s.textarea}` : s.textarea}>
      {label && <div className={s.label}>{label}</div>}
      <textarea defaultValue={value} {...props} />
    </div>
  );
};

export default MyTextarea;
