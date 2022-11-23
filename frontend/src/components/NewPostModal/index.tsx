import { useState } from "react";
import { Modal } from "react-bootstrap";
import { FormInput } from "../FormInput";
import { TextArea } from "../TextArea";

export const NewPostModal = ({ modalShow, setModalShow }: PropType) => {
  const initialValue = {
    title: "",
    author: "",
    body: "",
    category: ""
  };

  const [values, setValues] = useState(initialValue);

  const handleClose = () => setModalShow(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Modal show={modalShow} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Novo Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormInput
          name="title"
          type="text"
          placeholder="Título"
          value={values.title}
          handleChange={handleChange}
        />
        <FormInput
          name="author"
          type="text"
          placeholder="Autor"
          value={values.author}
          handleChange={handleChange}
        />
         <TextArea
          name="body"
          placeholder="Mensagem"
          value={values.body}
          handleChange={handleChange}
        />
        <FormInput
          name="category"
          type="text"
          placeholder="Categoria"
          value={values.category}
          handleChange={handleChange}
        />
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={handleClose}>
          Close
        </button>
        <button className="btn btn-primary" onClick={handleClose}>
          Save Changes
        </button>
      </Modal.Footer>
    </Modal>
  );
};

type PropType = {
  modalShow: boolean;
  setModalShow: Function;
};
