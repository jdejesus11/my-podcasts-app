import React, { useState } from "react";
import "./text-input.scss";

export interface TextInputProps {
  placeholder: string;
  onChange: (value: string) => void;
  ariaLabel?: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const [value, setValue] = useState<string>("");
  const { onChange, ariaLabel, placeholder } = props;

  const onChangeEvent = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event?.currentTarget.value;
    setValue(value);
    onChange(value);
  };

  return (
    <input
      className="text-input"
      type="text"
      value={value}
      onChange={onChangeEvent}
      aria-label={ariaLabel ?? ""}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
