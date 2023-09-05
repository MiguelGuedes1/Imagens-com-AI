import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { logo_1 } from './assets'; // Importe a imagem do arquivo index.js
import { Pagina_principal, Criar_um_post } from './paginas_da_app';
import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa'
import Footer from './componentes_uteis/Footer'
import NavBar from './componentes_uteis/NavBar'

function App() {
  return (


    <BrowserRouter>





      <main >

        <Routes>

          <Route path="/" element={<Pagina_principal />} />
          <Route path="/create-post" element={<Criar_um_post />} />


        </Routes>



      </main>
      <Footer />











    </BrowserRouter>
  );
}

export default App;
