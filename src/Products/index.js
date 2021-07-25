import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Products/styles.css';

export default function Products() {
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");

  const handleCode = (e) => {
    setCode(e.target.value);
  }
  const handleDescription = (e) => {
    setDescription(e.target.value);
  }
  const handlePrice = (e) => {
    setPrice(e.target.value);
  }
  const handleAmount = (e) => {
    setAmount(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      code,
      description,
      price,
      amount
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
          <h1> Cadastro de Produtos</h1>
            <form className="form-styles" onSubmit={onSubmit}>
                <input className="input-styles" value={code} onChange={handleCode} placeholder="Código"/>
                <input className="input-styles" value={description} onChange={handleDescription} placeholder="Descrição"/>
                <input className="input-styles" value={price} onChange={handlePrice} placeholder="Preço"/>
                <input className="input-styles" value={amount} onChange={handleAmount} placeholder="Quantidade"/>
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
}