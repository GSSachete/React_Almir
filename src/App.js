import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import Menu from '../src/components/Menu/Menu';
import Footer from '../src/components/footer';
import Login from '../src/components/Login/Login';
import Register from './components/Login/register';
import Attcliente from './components/Cliente/AtualizarCliente';
import Cadcliente from './components/Cliente/CadastrarCliente';
import Listcliente from './components/Cliente/Listagem_cliente';
import CadService from './components/Service/CadastrarService';
import ListService from './components/Service/Listagem_services';
import AttService from './components/Service/AtualizarService';
import CadAgendamento from './components/Agendamento/Cadastrar_agendamento';
import ListAgendamento from './components/Agendamento/Listagem_agendamento';
import AttAgendamento from './components/Agendamento/Atualizar_agendamento';
import RelatorioAgendamento from './components/Relatorio/RelatorioAgendamento';
function App() {
  useEffect(() => {
    const token = Cookies.get('token');
    
    if (!token && window.location.pathname !== '/login') {
      window.location.href = '/login';
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/home"
            element={
              <>
                <Menu />
                <ListAgendamento/>
              </>
            }
          />
          <Route
            path="/cliente/cadastro"
            element={
              <>
                <Menu />
                <Cadcliente />
              </>
            }
          />
          <Route
            path="/cliente/atualizar/:id_cliente"
            element={
              <>
                <Menu />
                <Attcliente />
              </>
            }
          />
          <Route
            path="/cliente/listar"
            element={
              <>
                <Menu />
                <Listcliente />
              </>
            }
          />
          <Route
            path="/servico/cadastro"
            element={
              <>
                <Menu />
                <CadService />
              </>
            }
          />
          <Route
            path="/servico/listar"
            element={
              <>
                <Menu />
                <ListService />
              </>
            }
          />
          <Route
            path="/servico/atualizar/:id_servico"
            element={
              <>
                <Menu />
                <AttService />
              </>
            }
          />
          <Route
            path="/agendamento/cadastro"
            element={
              <>
                <Menu />
                <CadAgendamento />
              </>
            }
          />
          <Route
            path="/agendamento/listar"
            element={
              <>
                <Menu />
                <ListAgendamento />
              </>
            }
          />
          <Route
            path="/agendamento/atualizar/:id_agendamento"
            element={
              <>
                <Menu />
                <AttAgendamento />
              </>
            }
          />
          <Route
            path="/relatorio/agendamento"
            element={
              <>
                <Menu />
                <RelatorioAgendamento />
              </>
            }
          />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
