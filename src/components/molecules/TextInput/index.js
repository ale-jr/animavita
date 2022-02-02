import propTypes from "prop-types";
import { useRef } from "react";
import {
  TextInput as BaseTextInput,
  TextInputBox,
  TextInputLabel
} from "./style";

function TextInput({ value, onChange, label, id, placeholder  }) {
  const textInputId = useRef(id ?? `search-input-${Date.now()}`);
  return (
    <TextInputBox >
      <TextInputLabel htmlFor={textInputId.current}>
        {label}
      </TextInputLabel>
      <BaseTextInput
        placeholder={placeholder}
        id={textInputId.current}
        value={value}
        onChange={onChange}
      />
    </TextInputBox>
  );
}

TextInput.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
  label: propTypes.string.isRequired,
  id:propTypes.string,
  placeholder: propTypes.string
};

export default TextInput;
