import React, { useState, useEffect } from 'react';
import axios from 'axios';
import estados from '../estados';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link, useNavigate, useParams  } from 'react-router-dom';

import styles from '../Service/service.module.css'
const AtualizarAgendamento = () => {
  const navigate = useNavigate();
  const [id_servico, setId_servico] = useState('0');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [descricao, setDescricao] = useState('');
  const [id_cliente, setId_cliente] = useState('0'); 
  const id_loja = Cookies.get('id_loja');
  const token = Cookies.get('token');
  const [formSubmit, setFormSubmit] = useState(false);
  const [servicos, setServicos] = useState([]);
  const [clientes, setCliente] = useState([]);
  const {id_agendamento} = useParams();
  const parametros = {
    id_agendamento,
    id_loja
  }
  const ListarAgendamentos = async () => {

    try {
        const response = await axios.post('http://localhost:3000/agendamento/listar', parametros, {
            headers: {
                Authorization: `Bearer ${token}`, 
            },
        });
        const agendamento = response.data[0];
        console.log(agendamento.data);

        setId_servico(agendamento.id_servico);
        setData(agendamento.data);
        setHorario(agendamento.hora);
        setDescricao(agendamento.descricao);
        setId_cliente(agendamento.id_cliente);
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
  const listarServicos = async () => {
        let parametros = {
          id_loja
        }
        try {
            const response = await axios.post('http://localhost:3000/servico/listar', parametros, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            setServicos(response.data);
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
    const listarCliente = async () => {
      let parametros = {
        id_loja
      }
      try {
          const response = await axios.post('http://localhost:3000/cliente/listar', parametros, {
              headers: {
                  Authorization: `Bearer ${token}`, 
              },
          });
          setCliente(response.data);
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
      ListarAgendamentos();
      listarServicos();
      listarCliente();
    }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmit(true);
    if (
        id_servico === 0 ||
        data.length === 0||
        horario.length === 0||
        descricao.length === 0||
        id_cliente === 0
    ) {
        return;
    }
    //setId_servico(id_servico.toString())
    //setId_cliente(id_cliente.toString())
    const agendamentoBody = {
      id_agendamento,
      id_loja,
      id_servico:id_servico.toString(),
      data,
      hora: horario,
      descricao,
      id_cliente:id_cliente.toString(),
      status: 'a'
    }
    try {
      const response = await axios.put('http://localhost:3000/agendamento',agendamentoBody, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
      const data = response.data;
    
      if (response.status === 201) {
        alert(data.message)
        navigate('/agendamento/listar');
      } else {
        console.error(data.error);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const data = error.response.data;
        alert(data.error);
        navigate('/login');
      } else if(error.response && error.response.status === 409){
        const data = error.response.data;
        alert(data.error);
      }
      else{
        console.error('Erro ao fazer a requisição de agendamento:', error.message);
      }
    }
  }
    return(
<section className="vh-100">
  <div className="container-fluid h-custom">
  <div className="row d-flex justify-content-center align-items-center h-100 ">
  
      <div className= "col-md-8 col-lg-6 col-xl-4 offset-xl-1 my-3">
      
      <div className="d-flex flex-row">
        
      <p className={"lead fw-normal me-3 " + styles["estiloletra"]}>Atualizar agendamento<br/> </p>
            
            </div>
        <form className="mt-1" noValidate onSubmit={handleSubmit}>
          <div className={`form-group mb-3 ${formSubmit && id_servico === '0' ? 'was-validated' : ''}`}>
              <label className="form-label" htmlFor="servico">
                  Selecione o serviço
              </label>
              <select
                  className={`form-select ${formSubmit && id_servico === '0' ? 'is-invalid' : ''}`}
                  aria-label="Selecione o serviço"
                  name="servico"
                  id="servico"
                  value={id_servico}
                  onChange={(e) => setId_servico(e.target.value)}
              >
                  <option value="0" selected>Selecione o serviço</option>
                  {servicos.map((servico) => (
                        <option key={servico.id_servico} value={servico.id_servico}>
                            {servico.nome}
                        </option>
                    ))}
              </select>
              {formSubmit && id_servico === '0' && (
                  <div className="invalid-feedback">Selecione um serviço válido.</div>
              )}
          </div>
          <div className={`form-group mb-3 ${formSubmit && !data ? 'was-validated' : ''}`}>
              <label className="form-label" htmlFor="date">
                  Data
              </label>
              <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  value={data}
                  className={`form-control form-control-lg ${formSubmit && !data ? 'is-invalid' : ''}`}
                  onChange={(e) => setData(e.target.value)}
              />
              {formSubmit && !data && (
                  <div className="invalid-feedback">A data não pode estar vazia.</div>
              )}
          </div>
          <div className={`form-group mb-3 ${formSubmit && !horario ? 'was-validated' : ''}`}>
            <label className="form-label" htmlFor="time">
                Horário
            </label>
            <input
                type="time"
                name="time"
                id="time"
                required
                value={horario}
                className={`form-control form-control-lg ${formSubmit && !horario ? 'is-invalid' : ''}`}
                onChange={(e) => setHorario(e.target.value)}
            />
            {formSubmit && !horario && (
                <div className="invalid-feedback">O horário não pode estar vazio.</div>
            )}
        </div>
        <div className={`form-group mb-3 ${formSubmit && !descricao ? 'was-validated' : ''}`}>
            <label className="form-label" htmlFor="desc">
                Descrição
            </label>
            <input
                type="text"
                name="desc"
                id="desc"
                required
                value={descricao}
                className={`form-control form-control-lg ${formSubmit && !descricao ? 'is-invalid' : ''}`}
                onChange={(e) => setDescricao(e.target.value)}
            />
            {formSubmit && !descricao && (
                <div className="invalid-feedback">A descrição não pode estar vazia.</div>
            )}
        </div>
        <div className={`form-group mb-3 ${formSubmit && id_cliente === '0' ? 'was-validated' : ''}`}>
            <label className="form-label" htmlFor="cliente">
                Selecione o cliente
            </label>
            <select
                className={`form-select ${formSubmit && id_cliente === '0' ? 'is-invalid' : ''}`}
                aria-label="Selecione o cliente"
                name="cliente"
                id="cliente"
                value={id_cliente}
                onChange={(e) => setId_cliente(e.target.value)}
            >
                <option value="0" selected>Selecione o cliente</option>
                {clientes.map((cliente) => (
                    <option key={cliente.id_cliente} value={cliente.id_cliente}>
                        {cliente.nome}
                    </option>
                ))}
            </select>
            {formSubmit && id_cliente === '0' && (
                <div className="invalid-feedback">Selecione um cliente válido.</div>
            )}
        </div>
        <div className="text-center text-lg-start mt-4 pt-2">
          <button type="submit" class="btn btn-primary">Atualizar</button>
        </div>
        </form>
      </div>
    </div>
  </div>
</section>
    )
  }
  export default AtualizarAgendamento;