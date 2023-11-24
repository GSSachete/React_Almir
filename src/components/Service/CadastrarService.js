import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import styles from '../Service/service.module.css'
import { Link, useNavigate } from 'react-router-dom';
const CadastrarService = () => {
  const navigate = useNavigate();
  const [nome, setnome] = useState('');
  const [preco, setPreco] = useState('');
  const [formSubmit, setFormSubmit] = useState(false);
  const id_loja = Cookies.get('id_loja');
  const token = Cookies.get('token');
  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmit(true);
    if (
      preco <= 0 ||
      nome.length === 0
  ) {
      return;
  }
  const preco_f =  parseFloat(preco)
  const servicoBody = {
    id_loja,
    nome,
    preco: preco_f
  }
  //alert(token)
  try {
    const response = await axios.post('http://localhost:3000/servico',servicoBody, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
    const data = response.data;
  
    if (response.status === 201) {
      alert(data.message)
      navigate('/servico/listar');
    } else {
      console.error(data.error);
    }
  } catch (error) {
    if (error.response && error.response.status === 401) {
      const data = error.response.data;
      alert(data.error);
      navigate('/login');
    } else {
      console.error('Erro ao fazer a requisição de servico:', error.message);
    }
  }
  
  }
    return(
<section className="vh-100">
  <div className="container-fluid h-custom">
  <div className="row d-flex justify-content-center align-items-center h-100 ">
  
      <div className= "col-md-8 col-lg-6 col-xl-4 offset-xl-1 my-3">
      
      <div className="d-flex flex-row">
        
      <p className={"lead fw-normal me-3 " + styles["estiloletra"]}>Cadastrar serviço<br/> </p>
            
            </div>
        <form className="mt-1"  noValidate onSubmit={handleSubmit}>
        <div className="form-outline mb-3">
            
        
          </div>
          <div className={`form-group mb-3 ${formSubmit && nome.length === 0 ? 'was-validated' : ''}`}>
            <label className="form-label" htmlFor="nome">
                Nome do Serviço
            </label>
            <input
                type="text"
                name="nome"
                id="nome"
                required
                className={`form-control form-control-lg ${formSubmit && nome.length === 0 ? 'is-invalid' : ''}`}
                placeholder="Nome do Serviço"
                value={nome}
                onChange={(e) => setnome(e.target.value)}
                minLength="1"
                maxLength="255"
            />
            {formSubmit && nome.length === 0 && (
                <div className="invalid-feedback">O nome do serviço não pode estar vazio.</div>
            )}
        </div>

       
        <div className={`form-group mb-3 ${formSubmit && preco.length === 0 ? 'was-validated' : ''}`}>
          <label className="form-label" htmlFor="preco">
              Preço
          </label>
          <input
              type="number"  
              name="preco"
              id="preco"
              required
              className={`form-control form-control-lg ${formSubmit && preco.length === 0 ? 'is-invalid' : ''}`}
              placeholder="Preço"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
              min="0"  
              step="0.01"  
          />
          {formSubmit && preco.length === 0 && (
              <div className="invalid-feedback">O preço não pode estar vazio.</div>
          )}
      </div>
       
          <div className="text-center text-lg-start mt-4 pt-2">
          <button type="submit" class="btn btn-primary">Cadastrar</button>
           
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    )
  }
  export default CadastrarService;