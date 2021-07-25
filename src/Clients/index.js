import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Clients/styles.css';

export default function Clients() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  }
  const handlePhone = (e) => {
    setPhone(e.target.value);
  }
  const handleCpf = (e) => {
    setCpf(e.target.value);
  }
  const handleAdress = (e) => {
    setAdress(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      phone,
      cpf,
      adress,
      email
    };

    localStorage.setItem("lead", JSON.stringify(data));
  };

  return (
    <>
      <header className="header-styles">
        <h3>e-Commerce - Sistema de Cadastros</h3>
      </header>
      <main className="main-styles">
        <div className="button-center">
          <h1> Cadastro de Clientes</h1>
          <form className="form-styles" onSubmit={onSubmit}>
            <input className="input-styles" value={name} onChange={handleName} placeholder="Nome"/>
            <input className="input-styles" value={phone} onChange={handlePhone} placeholder="Telefone"/>
            <input className="input-styles" value={cpf} onChange={handleCpf} placeholder="CPF"/>
            <input className="input-styles" value={adress} onChange={handleAdress} placeholder="Endereço"/>
            <input className="input-styles" value={email} onChange={handleEmail} placeholder="E-mail"/>
            <button className="summit-styles">Cadastrar</button>
          </form>
          <NavLink to='/'><button className="back-styles">Voltar</button></NavLink>
        </div>
      </main>
      <footer className="footer-styles">
        <p>
          Todos os direitos reservados
        </p>
      </footer>

    </>
  );
};