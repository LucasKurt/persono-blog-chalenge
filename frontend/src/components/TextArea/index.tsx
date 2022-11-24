import { useEffect, useState } from "react";
import { ChangeEventHandler } from "react";
import { PostError } from "../../types";

export const TextArea = ({ name, placeholder, value, handleChange, postErrors }: PropType) => {

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
      <textarea
        className={`form-control ${!!err ? 'border-danger' : ''}`}
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
  placeholder: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLTextAreaElement>;
  postErrors: PostError[] | undefined;
  error?: boolean;
};
