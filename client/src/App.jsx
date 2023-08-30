import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { logo_1 } from './assets'; // Importe a imagem do arquivo index.js
import { Pagina_principal, Criar_um_post } from './paginas_da_app';

function App() {
  return (
    <BrowserRouter>

      <nav className="w-full flex justify-between itens-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img src={logo_1} alt="logo" className="w-12 object-contain" />
        </Link>


        <Link to="create-post" className="flex items-center font-Poppins font-medium bg-[#6469ff] text-white px-7 py-3 
                    rounded-md">
          Cria um Post
        </Link>
      </nav>

      <main className="sm:p-8 px4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">

        <Routes>

          <Route path="/" element={<Pagina_principal />} />
          <Route path="/create-post" element={<Criar_um_post />} />


        </Routes>

      </main>

    </BrowserRouter>
  );
}

export default App;
