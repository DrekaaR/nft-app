import { useEffect, useState } from "react";

export const useValidation = (value, validations) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [minLengthText, setMinLengthText] = useState("");
  const [emptyErrorText, setEmptyErrorText] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [inputValid, setFormValid] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmail":
          const re =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (re.test(String(value).toLowerCase())) {
            setEmailError(false);
          } else {
            setEmailError(true);
            setEmailErrorText("Wrong Email address");
          }
          break;
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          setMinLengthText("Wrong length");
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          setEmptyErrorText("The field can not be empty");
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (isEmpty || minLengthError || emailError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [isEmpty, minLengthError, emailError]);

  return {
    isEmpty,
    minLengthError,
    minLengthText,
    emptyErrorText,
    emailError,
    emailErrorText,
    inputValid
  };
};
