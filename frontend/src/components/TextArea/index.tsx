import { ChangeEventHandler } from "react";

export const TextArea = ({
  name,
  placeholder,
  value,
  handleChange,
  error,
}: PropType) => {
  return (
    <div className="mb-3">
      <textarea
        className="form-control"
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
  placeholder: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement>;
  error?: boolean;
};
