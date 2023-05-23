import { useValidation } from "hooks/useValidation";
import { useState } from "react";

export default function useInput(initialValue, validations) {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlur = (e) => {
    setIsDirty(true);
  };

  return { value, onChange, onBlur, isDirty, setValue, ...valid };
}
