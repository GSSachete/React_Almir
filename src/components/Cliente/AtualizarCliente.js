import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import styles from '../Cliente/Cliente.module.css'
import estados from '../estados';
import { Link, useNavigate, useParams  } from 'react-router-dom';
const Cliente = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [tipoPessoa, setTipoPessoa] = useState('F');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [sexo, setSexo] = useState('');
    const [clientes, setClientes] = useState([]);
    const [formSubmit, setFormSubmit] = useState(false);
    const id_loja = Cookies.get('id_loja');
    const token = Cookies.get('token');
    const {id_cliente} = useParams();
    const parametros = {
      id_cliente,
      id_loja
    }
    const listarClientes = async () => {

      try {
          const response = await axios.post('http://localhost:3000/cliente/listar', parametros, {
              headers: {
                  Authorization: `Bearer ${token}`, 
              },
          });
          const cliente = response.data[0];
          setClientes(cliente);
          setNome(cliente.nome);
          setTipoPessoa(cliente.tipo_pessoa);
          
          setRua(cliente.rua);
          setNumero(cliente.numero.toString());
          setCidade(cliente.cidade);
          setEstado(cliente.estado);
          setCep(cliente.cep);
          setTelefone(cliente.telefone);
          setEmail(cliente.email);
          setSexo(cliente.sexo);
      } catch (error) {
          if (error.response && error.response.status === 401) {
              const data = error.response.data;
              alert(data.error);
              navigate('/login');
          } else {
              console.error('Erro ao fazer a requisição de loja:', error.message);
          }
      }
  };
  useEffect(() => {
      listarClientes();
  }, []);
    const handleSubmit = async (event) => {
      event.preventDefault();
        setFormSubmit(true);
        if (
      
          rua.length === 0 ||
          numero.length === 0 ||
          cidade.length === 0 ||
          estado.length === 0 ||
          cep.length !== 8 ||
          telefone.length === 0 ||
          email.length === 0
      ) {
          return;
      }
    
      const clienteBody = {
        id_loja: (id_loja),
        id_cliente,
        nome: nome,
        rua: rua,
        numero: numero,
        cidade: cidade,
        estado: estado,
        cep: cep,
        telefone: telefone,
        email: email,
        tipo_pessoa: tipoPessoa,
        sexo: sexo
      };
      try {
        const response = await axios.put('http://localhost:3000/cliente',clienteBody, {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          });
        const data = response.data;
      
        if (response.status === 201) {
          alert(data.message)
          navigate('/cliente/listar');
        } else {
          console.error(data.error);
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          const data = error.response.data;
          alert(data.error);
          navigate('/login');
        } else {
          console.error('Erro ao fazer a requisição de loja:', error.message);
        }
      }
    };
    
    return(
<section className="vh-100">
  <div className="container-fluid h-custom">
  <div className="row d-flex justify-content-center align-items-center h-100 ">
      <div className= "col-md-8 col-lg-6 col-xl-4 my-3">
      
        <div className="d-flex flex-row">
            <p className={"lead fw-normal me-3 " + styles["estiloletra"]}>Atualizar Cliente<br/> </p>
        </div>
        <form className="mt-1"  noValidate onSubmit={handleSubmit}>
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
            <div className={`form-group mb-3 ${formSubmit && sexo.length === 0 ? 'was-validated' : ''}`}>
                <label className="form-label" htmlFor="sexo">
                    Sexo
                </label>
                <select
                    id="sexo"
                    name="sexo"
                    value={sexo}
                    onChange={(e) => setSexo(e.target.value)}
                    required
                    className={`form-select form-select-lg ${formSubmit && sexo.length === 0 ? 'is-invalid' : ''}`}
                >
                    <option value="" disabled>Selecione o sexo...</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option>
                    <option value="O">Outro</option>
                </select>
                {formSubmit && sexo.length === 0 && (
                    <div className="invalid-feedback">Por favor, selecione o sexo.</div>
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

        <div className="text-center text-lg-start mt-4 pt-2">
        <button type="submit" className="btn btn-primary btn-lg "
            >Atualizar</button>
        
        </div>

        </form>
      </div>
    </div>
  </div>

</section>
    )
  }
  export default Cliente;