import React, { useState } from "react";
import "../../styles/CadastroCliente.css";
import Index from "./Index";

const CadastroCliente = ({ closeModal }) => {
  const currentDateTime = new Date().toLocaleString(); // Ex.: "22/01/2025 14:30:45"
  const [formData, setFormData] = useState({
    nome: "",
    senha: "",
    cpf: "",
    endereco: "",
    cep: "",
    email: "",
    telefone: "",
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

  const enviarCadastro = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch(
          "http://localhost:3000/api/cadastroClienteRoute",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              nome: formData.nome,
              senha: formData.senha,
              cpf: formData.cpf,
              endereco: formData.endereco,
              cep: formData.cep,
              email: formData.email,
              telefone: formData.telefone,
            }),
          }
        );
        const servidor = await response.json();
        if (response.ok) {
          console.log(servidor.message , "Cliente cadastrado: ", servidor.cliente);
          console.log ("Horario da requisicao: ", currentDateTime)
          alert("Cadastro realizado com sucesso!");
          closeModal();
          setFormData({
            nome: "",
            senha: "",
            cpf: "",
            endereco: "",
            cep: "",
            email: "",
            telefone: "",
          });
          setErrors({});
        } else {
          console.log("Erro ao cadastrar cliente");
        }
      } catch (error) {
        console.error("Erro ao conectar no servidor:", error);
      }
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div className="form-container">
      <h1>Cadastro de Cliente</h1>
      <form onSubmit={enviarCadastro} className="client-form">
        {[
          { label: "Nome", name: "nome", type: "text" },
          { label: "Senha", name: "senha", type: "password" },
          { label: "CPF", name: "cpf", type: "text" },
          { label: "Endereço", name: "endereco", type: "text" },
          { label: "CEP", name: "cep", type: "text" },
          { label: "E-mail", name: "email", type: "email" },
          { label: "Telefone", name: "telefone", type: "text" },
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
