import { useEffect, useState } from "react";
import { ChangeEventHandler } from "react";
import { PostError } from "../../types";

export const FormInput = ({ name, type, placeholder, value, handleChange, postErrors }: PropType) => {

  const [err, setErr] = useState<PostError>();

  useEffect(() => {
    postErrors?.forEach((error) => {
      if (name === error.fieldName) {
        setErr(error);
      }
    });
  }, [postErrors, name]);

  return (
    <div className="mb-3">
      <input
        className={`form-control ${!!err ? 'border-danger' : ''}`}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
      {!!err && (
        <div className="form-text text-danger">
          {err.message}
        </div>
      )}
    </div>
  );
};

type PropType = {
  name: string;
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  postErrors: PostError[] | undefined
  error?: boolean;
};
