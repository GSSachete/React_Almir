import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from '../Images/logo.png';

const Login = () => {
  const [cpfCnpj, setCpfCnpj] = useState('');
  const [senha, setSenha] = useState('');
  const [manterLogin, setManterLogin] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    
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
                    value={manterLogin}
                    id="form2Example3"
                    onChange={() => setManterLogin(!manterLogin)}
                  />
                  <label className="form-check-label" htmlFor="form2Example3">
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
                  Não tem uma conta? <a href="#!" className="link-danger">
                    Registrar-se
                  </a>
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
