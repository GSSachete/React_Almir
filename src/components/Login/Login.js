import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../Images/logo.png';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if ((cpfCnpj.length < 11 || cpfCnpj.length > 14  )|| senha.length === 0) {
      return;
    }
    try {
      const response = await axios.post('http://localhost:3000/auth', {
        cpf_cnpj: cpfCnpj,
        senha: senha,
      });
      const data = response.data;
    
      if (response.status === 200) {
        console.log(data);
        Cookies.set('token', data.token);
        Cookies.set('id_loja', data.id_loja);
        navigate('/home');
      } else {
        console.error(data.error);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const data = error.response.data;
        alert(data.error);
        console.error(data.error);
      } else {
        console.error('Erro ao fazer a requisição de login:', error.message);
      }
    }
  };

  return (
    <section className="align-middle">
      <div className="container-fluid h-custom vh-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img src={logo} className="img-fluid" alt="Sample image" />
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form className="needs-validation" noValidate onSubmit={handleSubmit}>
              <div className={`form-outline mb-4 ${formSubmitted && cpfCnpj.length < 11 ? 'was-validated' : ''}`}>
                <label className="form-label" htmlFor="cpf_cnpj">
                  CPF/CNPJ
                </label>
                <input
                  type="text"
                  id="cpf_cnpj"
                  className={`form-control form-control-lg ${
                    formSubmitted && cpfCnpj.length < 11 ? 'is-invalid' : ''
                  }`}
                  placeholder="Digite seu CPF ou CNPJ Registrado"
                  value={cpfCnpj}
                  onChange={(e) => setCpfCnpj(e.target.value)}
                  required
                  minLength="11"
                  maxLength="14"
                />
                {formSubmitted && cpfCnpj.length < 11 && (
                  <div className="invalid-feedback">O CPF ou CNPJ deve ter no mínimo 11 caracteres.</div>
                )}
              </div>

              <div className={`form-outline mb-3 ${formSubmitted && senha.length === 0 ? 'was-validated' : ''}`}>
                <label className="form-label" htmlFor="senha">
                  Senha
                </label>
                <input
                  type="password"
                  id="senha"
                  className={`form-control form-control-lg ${
                    formSubmitted && senha.length === 0 ? 'is-invalid' : ''
                  }`}
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
                {formSubmitted && senha.length === 0 && (
                  <div className="invalid-feedback">Por favor, digite sua senha.</div>
                )}
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="materlogin" 
                  />
                  <label className="form-check-label" htmlFor="materlogin">
                    Manter Login
                  </label>
                </div>
                <a href="#!" className="text-body">
                  Esqueceu sua senha?
                </a>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <button type="submit" className="btn btn-primary btn-lg">
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Não tem uma conta? <Link to="/register" className="link-danger">
                      Registrar-se
                    </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
