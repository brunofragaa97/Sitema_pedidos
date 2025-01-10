import React, { useState } from "react";
import "../../styles/CadastroCliente.css";

const CadastroCliente = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    cpf: "",
    address: "",
    cep: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "Este campo é obrigatório.";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Cadastro enviado com sucesso!");
      setFormData({
        name: "",
        password: "",
        cpf: "",
        address: "",
        cep: "",
        email: "",
        phone: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="form-container">
      <h1>Cadastro de Cliente</h1>
      <form onSubmit={handleSubmit} className="client-form">
        {[
          { label: "Nome", name: "name", type: "text" },
          { label: "Senha", name: "password", type: "password" },
          { label: "CPF", name: "cpf", type: "text" },
          { label: "Endereço", name: "address", type: "text" },
          { label: "CEP", name: "cep", type: "text" },
          { label: "E-mail", name: "email", type: "email" },
          { label: "Telefone", name: "phone", type: "text" },
        ].map((field) => (
          <div key={field.name} className="form-group">
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className={errors[field.name] ? "input-error" : ""}
            />
            {errors[field.name] && <small>{errors[field.name]}</small>}
          </div>
        ))}
        <button type="submit" className="submit-button">
          Enviar Cadastro
        </button>
      </form>
    </div>
  );
};

export default CadastroCliente;
