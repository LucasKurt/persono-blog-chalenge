import axios, { AxiosError } from "axios";

import { useState } from "react";
import { Modal } from "react-bootstrap";
import { PostError } from "../../types";
import { FormInput } from "../FormInput";
import { LoadingSpinner } from "../LoadingSpinner";
import { TextArea } from "../TextArea";

export const NewPostModal = ({ modalShow, setModalShow }: PropType) => {
  const initialValue = {
    title: "",
    author: "",
    body: "",
    category: "",
  };

  const [values, setValues] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [postErrors, setPostErrors] = useState<PostError[]>();

  const handleClose = () => setModalShow(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      await axios.post("http://localhost:8080/posts", values);
      setValues(initialValue);
      handleClose()
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error))  {
        if(error.response) {
          const { errors} = error.response.data;
          setPostErrors(errors);
        }
      } else {
        console.log(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={modalShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Novo Post</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <FormInput
            name="title"
            type="text"
            placeholder="Título"
            value={values.title}
            handleChange={handleChange}
            postErrors={postErrors}
          />
          <FormInput
            name="author"
            type="text"
            placeholder="Autor"
            value={values.author}
            handleChange={handleChange}
            postErrors={postErrors}
          />
          <TextArea
            name="body"
            placeholder="Mensagem"
            value={values.body}
            handleChange={handleChange}
            postErrors={postErrors}
          />
          <FormInput
            name="category"
            type="text"
            placeholder="Categoria"
            value={values.category}
            handleChange={handleChange}
            postErrors={postErrors}
          />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary me-2" onClick={handleClose}>
            Fechar
          </button>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? <LoadingSpinner /> : "Salvar"}
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

type PropType = {
  modalShow: boolean;
  setModalShow: Function;
};
