import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Home/styles.css';

const Home=() => {
  return (
    <>
      <header className="header-styles">
        <h3>e-Commerce - Sistema de Cadastros</h3>
      </header>
      <main className="main-styles">
        <div className="button-center">
        <NavLink to='/Products'><button className="button-styles" type="button">Cadastro de produtos</button></NavLink>
        <NavLink to='/Clients'><button className="button-styles" type="button">Cadastro de Clientes</button></NavLink>
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

export default Home;