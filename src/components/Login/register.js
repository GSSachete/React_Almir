import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import styles from './register.module.css'
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';

const Register = () => {
    const [nome, setNome] = useState('');
    const [tipoPessoa, setTipoPessoa] = useState('F');
    const [cpfCnpj, setCpfCnpj] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [formSubmit, setFormSubmit] = useState(false);

    const handleSubmit = async (event) => {
      event.preventDefault();
        setFormSubmit(true);
        if (
          (cpfCnpj.length < 11 || cpfCnpj.length > 14) ||
          rua.length === 0 ||
          numero.length === 0 ||
          cidade.length === 0 ||
          estado.length === 0 ||
          cep.length !== 8 ||
          telefone.length === 0 ||
          email.length === 0 ||
          senha.length === 0
      ) {
          return;
      }
      const lojaBody = {
          nome: nome,
          rua: rua,
          numero: numero,
          cidade: cidade,
          estado: estado,
          cep: cep,
          telefone: telefone,
          email: email,
          senha: senha,
          tipo_pessoa: tipoPessoa,
          cpf: tipoPessoa === 'F' ? cpfCnpj : null,
          cnpj: tipoPessoa === 'J' ? cpfCnpj : null
      };
      try {
        const response = await axios.post('http://localhost:3000/loja',lojaBody);
        const data = response.data;
      
        if (response.status === 201) {
          alert(data.message)
        } else {
          console.error(data.error);
        }
      } catch (error) {
        if (error.response && error.response.status === 409) {
          const data = error.response.data;
          alert(data.error);
          console.error(data.error);
        } else {
          console.error('Erro ao fazer a requisição de loja:', error.message);
        }
      }
    };
    const estados = [
      { sigla: 'AC', nome: 'Acre' },
      { sigla: 'AL', nome: 'Alagoas' },
      { sigla: 'AP', nome: 'Amapá' },
      { sigla: 'AM', nome: 'Amazonas' },
      { sigla: 'BA', nome: 'Bahia' },
      { sigla: 'CE', nome: 'Ceará' },
      { sigla: 'DF', nome: 'Distrito Federal' },
      { sigla: 'ES', nome: 'Espírito Santo' },
      { sigla: 'GO', nome: 'Goiás' },
      { sigla: 'MA', nome: 'Maranhão' },
      { sigla: 'MT', nome: 'Mato Grosso' },
      { sigla: 'MS', nome: 'Mato Grosso do Sul' },
      { sigla: 'MG', nome: 'Minas Gerais' },
      { sigla: 'PA', nome: 'Pará' },
      { sigla: 'PB', nome: 'Paraíba' },
      { sigla: 'PR', nome: 'Paraná' },
      { sigla: 'PE', nome: 'Pernambuco' },
      { sigla: 'PI', nome: 'Piauí' },
      { sigla: 'RJ', nome: 'Rio de Janeiro' },
      { sigla: 'RN', nome: 'Rio Grande do Norte' },
      { sigla: 'RS', nome: 'Rio Grande do Sul' },
      { sigla: 'RO', nome: 'Rondônia' },
      { sigla: 'RR', nome: 'Roraima' },
      { sigla: 'SC', nome: 'Santa Catarina' },
      { sigla: 'SP', nome: 'São Paulo' },
      { sigla: 'SE', nome: 'Sergipe' },
      { sigla: 'TO', nome: 'Tocantins' },
  ];

  const Cpfvalido = (value) => /^\d{11}$/.test(value);
    const Cnpjvalido = (value) => /^\d{14}$/.test(value);

    const Inputvalido = () => {
        if (tipoPessoa === 'F') {
            return formSubmit && (!cpfCnpj || !Cpfvalido(cpfCnpj));
        } else if (tipoPessoa === 'J') {
            return formSubmit && (!cpfCnpj || !Cnpjvalido(cpfCnpj));
        }
        return false;
    };

    const MensagemInvalido = () => {
        if (tipoPessoa === 'F') {
            return 'O CPF deve ter exatamente 11 caracteres.';
        } else if (tipoPessoa === 'J') {
            return 'O CNPJ deve ter exatamente 14 caracteres numéricos.';
        }
        return '';
    };
    return(
    <section className="vh-100">
      <div className="container-fluid h-custom">
      <div className="row d-flex justify-content-center align-items-center h-100 ">
          <div className="col-md-9 col-lg-6 col-xl-5 ">
            <img src={logo}
              className="img-fluid" alt="Sample image"/>
          </div>
          <div className= "col-md-8 col-lg-6 col-xl-4 offset-xl-1 my-3">
          
          <div className="d-flex flex-row">
        
            <p className={"lead fw-normal me-3 " + styles["estiloletra"]}>Criar conta<br/> </p>
            
            </div>    
        <form className="mt-1" noValidate onSubmit={handleSubmit}>
            <div className={`form-group mb-3 ${formSubmit && nome.length === 0 ? 'was-validated' : ''}`}>
                <label className="form-label" htmlFor="nome">
                    Nome
                </label>
                <input
                    type="text"
                    name="nome"
                    id="nome"
                    required
                    className={`form-control form-control-lg ${formSubmit && nome.length === 0 ? 'is-invalid' : ''}`}
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    minLength="1"
                    maxLength="255"
                />
                {formSubmit && nome.length === 0 && (
                    <div className="invalid-feedback">O nome não pode estar vazio.</div>
                )}
            </div>
            <div className="form-check form-switch mb-3">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="tipoPessoaSwitch"
                    checked={tipoPessoa === 'J'}
                    onChange={() => setTipoPessoa(tipoPessoa === 'F' ? 'J' : 'F')}
                />
                <label className="form-check-label" htmlFor="tipoPessoaSwitch">
                    {tipoPessoa === 'F' ? 'Pessoa Física (CPF)' : 'Pessoa Jurídica (CNPJ)'}
                </label>
            </div>
            <div className={`form-group mb-3 ${Inputvalido() ? 'was-validated' : ''}`}>
                <label className="form-label" htmlFor="cpfCnpj">
                {tipoPessoa === 'F' ? 'CPF' : 'CNPJ'}
                </label>
                <InputMask
                mask={tipoPessoa === 'F' ? '999.999.999-99' : '99.999.999/9999-99'}
                maskChar={null}
                id="cpfCnpj"
                required
                className={`form-control form-control-lg ${Inputvalido() ? 'is-invalid' : ''}`}
                placeholder={tipoPessoa === 'F' ? 'CPF' : 'CNPJ'}
                value={cpfCnpj}
                onChange={(e) => setCpfCnpj(e.target.value)}
                />
                {Inputvalido() && (
                <div className="invalid-feedback">{MensagemInvalido()}</div>
                )}
            </div>
            <div className={`form-group mb-3 ${formSubmit && cep.length < 8  ? 'was-validated' : ''}`}>
                <label className="form-label" htmlFor="cep">
                    CEP
                </label>
                <input
                    type="text"
                    name="cep"
                    id="cep"
                    required
                    className={`form-control form-control-lg ${formSubmit && cep.length < 8 ? 'is-invalid' : ''}`}
                    placeholder="CEP"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    minLength="8"
                    maxLength="8"
                />
                {formSubmit && cep.length < 8  && (
                    <div className="invalid-feedback">O CEP deve ter exatamente 8 caracteres.</div>
                )}
            </div>
            <div className="row">
              <div className={`form-group mb-3 col-md-6 ${formSubmit && rua.length === 0 ? 'was-validated' : ''}`}>
                  <label className="form-label" htmlFor="rua">
                      Rua
                  </label>
                  <input
                      type="text"
                      name="rua"
                      id="rua"
                      required
                      className={`form-control form-control-lg ${formSubmit && rua.length === 0 ? 'is-invalid' : ''}`}
                      placeholder="Rua"
                      value={rua}
                      onChange={(e) => setRua(e.target.value)}
                      minLength="1"
                      maxLength="255"
                  />
                  {formSubmit && rua.length === 0 && (
                      <div className="invalid-feedback">O nome da rua não pode estar vazio.</div>
                  )}
              </div>
              <div className={`form-group mb-3 col-md-6 ${formSubmit && numero.length === 0 ? 'was-validated' : ''}`}>
                <label className="form-label" htmlFor="numero">
                    Número
                </label>
                <input
                    type="text"
                    name="numero"
                    id="numero"
                    required
                    className={`form-control form-control-lg ${formSubmit && numero.length === 0 ? 'is-invalid' : ''}`}
                    placeholder="Número"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    minLength="1"
                    maxLength="10"
                />
                {formSubmit && numero.length === 0 && (
                    <div className="invalid-feedback">O número não pode estar vazio.</div>
                )}
            </div>
          </div>
          <div className={`form-group mb-3 ${formSubmit && cidade.length === 0 ? 'was-validated' : ''}`}>
            <label className="form-label" htmlFor="cidade">
                Cidade
            </label>
            <input
                type="text"
                name="cidade"
                id="cidade"
                required
                className={`form-control form-control-lg ${formSubmit && cidade.length === 0 ? 'is-invalid' : ''}`}
                placeholder="Cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                minLength="1"
                maxLength="100"
            />
            {formSubmit && cidade.length === 0 && (
                <div className="invalid-feedback">O nome da cidade não pode estar vazio.</div>
            )}
        </div>
        <div className={`form-group mb-3 ${formSubmit && estado.length === 0 ? 'was-validated' : ''}`}>
                <label className="form-label" htmlFor="estado">
                    Estado
                </label>
                <select
                    name="estado"
                    id="estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                    required
                    className={`form-select form-select-lg ${formSubmit && estado.length === 0 ? 'is-invalid' : ''}`}
                >
                    <option value="">Selecione o estado...</option>
                    {estados.map((estado) => (
                        <option key={estado.sigla} value={estado.sigla}>
                            {estado.nome}
                        </option>
                    ))}
                </select>
                {formSubmit && estado.length === 0 && (
                    <div className="invalid-feedback">Por favor, selecione um estado.</div>
                )}
            </div>
            <div className={`form-group mb-3 ${formSubmit && telefone.length > 0 ? 'was-validated' : ''}`}>
              <label className="form-label" htmlFor="telefone">
                  Telefone
              </label>
              <input
                  type="text"
                  name="telefone"
                  id="telefone"
                  required
                  className={`form-control form-control-lg ${formSubmit && telefone.length === 0 ? 'is-invalid' : ''}`}
                  placeholder="Telefone"
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
              />
              {formSubmit && telefone.length === 0 && (
                  <div className="invalid-feedback">O número de telefone é obrigatório.</div>
              )}
          </div>

          <div className={`form-group mb-3 ${formSubmit && email.length > 0 ? 'was-validated' : ''}`}>
            <label className="form-label" htmlFor="email">
                Email
            </label>
            <input
                type="email"
                name="email"
                id="email"
                required
                className={`form-control form-control-lg ${formSubmit && email.length === 0 ? 'is-invalid' : ''}`}
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {formSubmit && email.length === 0 && (
                <div className="invalid-feedback">O endereço de email é obrigatório.</div>
            )}
        </div>

       
        <div className={`form-group mb-3 ${formSubmit && senha.length > 0 ? 'was-validated' : ''}`}>
            <label className="form-label" htmlFor="senha">
                Senha
            </label>
            <input
                type="password"
                name="senha"
                id="senha"
                required
                className={`form-control form-control-lg ${formSubmit && senha.length === 0 ? 'is-invalid' : ''}`}
                placeholder="Senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
            />
            {formSubmit && senha.length === 0 && (
                <div className="invalid-feedback">A senha é obrigatória.</div>
            )}
        </div>

  
          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg "
             >Criar conta</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">
                  Já tem uma conta? <Link to="/login" className="link-danger">
                      Entrar
                    </Link>
                </p>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>
    )
  }
  export default Register;