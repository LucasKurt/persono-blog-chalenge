import { ChangeEventHandler } from "react";

export const FormInput = ({
  name,
  type,
  placeholder,
  value,
  handleChange,
  error,
}: PropType) => {
  return (
    <div className="mb-3">
      <input
        className="form-control"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
      {error && (
        <div className="form-text text-danger">
          We'll never share your email with anyone else.
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
  error?: boolean;
};
