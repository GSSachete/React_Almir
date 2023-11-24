import React, { useState, useEffect } from 'react';
import axios from 'axios';
import estados from '../estados';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link, useNavigate } from 'react-router-dom';

const Listar_agendamento = () => {
    const navigate = useNavigate();
    const [id_cliente, setId_cliente] = useState('');
    const [id_servico, setId_servico] = useState('');
    const [id_agendamento, setid_agendamento] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [descricao, setDescricao] = useState('');
    const [status, setStatus] = useState('');
    const id_loja = Cookies.get('id_loja');
  const token = Cookies.get('token');
    const [servicos, setServicos] = useState([]);
    const [clientes, setCliente] = useState([]);
    const [agendamento, setAgendamento] = useState([]);
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
      listarServicos();
      listarCliente();
    }, []);
    const handleFiltroSubmit = async (e) => {
        e.preventDefault();
        const id_loja = (Cookies.get('id_loja'));
        const token = Cookies.get('token');
        const servicoBody = {
          id_loja,
          id_loja,
        id_cliente,
        id_servico,
        id_agendamento,
        descricao,
        status
        };
        const parametros = Object.fromEntries(
          Object.entries(servicoBody).filter(([chave, valor]) => valor !== "" && valor !== null)
        );
        try {
          const response = await axios.post('http://localhost:3000/agendamento/listar', parametros, {
              headers: {
                Authorization: `Bearer ${token}`, 
              },
            });
            setAgendamento(response.data)
        } catch (error) {
            if (error.response && error.response.status === 401) {
                const data = error.response.data;
                alert(data.error);
                navigate('/login');
              } else {
                console.error('Erro ao fazer a requisição de loja:', error.message);
              }
        }
      }
      const handleDeletarClick = async (id_agendamento) => {
        const confirmarDelecao = window.confirm('Tem certeza que deseja deletar este agendamento?');

        if (confirmarDelecao) {
            try {
                const response = await axios.delete(`http://localhost:3000/agendamento/${id_agendamento}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 201) {
                    alert('Deletado com sucesso!')
                    navigate('/agendamento/listar');
                  } else {
                    console.error(data.error);
                  }
            } catch (error) {
                console.error('Erro ao deletar agendamento:', error);

                if (error.response && error.response.status === 401) {
                    const data = error.response.data;
                    alert(data.error);
                    navigate('/login');
                } else {
                    alert('Erro ao deletar o agendamento. Por favor, tente novamente.');
                }
            }
        }
    };
    return(
        <div>
            <div className="mx-3 mt-4 shadow p-3 ">
                <form onSubmit={handleFiltroSubmit}>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <label htmlFor="id_agendamento" className="form-label">ID do Agendamento</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id_agendamento"
                            placeholder="Filtrar por ID do Agendamento"
                            value={id_agendamento}
                            onChange={(e) => setid_agendamento(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="data" className="form-label">Data</label>
                        <input
                            type="text"
                            className="form-control"
                            id="data"
                            placeholder="Filtrar por Data"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="hora" className="form-label">Hora</label>
                        <input
                            type="text"
                            className="form-control"
                            id="hora"
                            placeholder="Filtrar por Hora"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                        />
                    </div>

                    <div className="col-md-3 mb-3">
                        <label htmlFor="descricao" className="form-label">Descrição</label>
                        <input
                            type="text"
                            className="form-control"
                            id="descricao"
                            placeholder="Filtrar por Descrição"
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>

                    <div className="form-group col-md-3  mb-3">
                        <label htmlFor="status" className="form-label">Filtrar por Status</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="" disabled selected>Selecione um status</option>
                            <option value="a">Aberto</option>
                            <option value="c">Concluído</option>
                            <option value="f">Cancelado</option>
                        </select>
                    </div>
                    <div className={`form-group col-md-3 mb-3`}>
                        <label className="form-label" htmlFor="servico">
                            Selecione o serviço
                        </label>
                        <select
                            className={`form-select`}
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
                        </div>
                        <div className={`form-group col-md-3 mb-3 `}>
                            <label className="form-label" htmlFor="cliente">
                                Selecione o cliente
                            </label>
                            <select
                                className={`form-select `}
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
                    </div>
                    <div className="row d-flex justify-content-end">    
                        <div className="col-md-4 mb-3">
                            <button type="submit" className="btn btn-primary">Aplicar Filtros</button>
                            <button type="reset" className="btn btn-secondary ms-2">Limpar Filtros</button>
                        </div>
                    </div>
                    </div>
            </form>
        </div>
        <table class="table table-striped my-4 mx-3">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Cliente</th>
            <th scope="col">CPF/CNPJ</th>
            <th scope="col">Serviço</th>
            <th scope="col">Data</th>
            <th scope="col">Hora</th>
            <th scope="col">Descrição</th>
            <th scope="col">Status</th>
            </tr>
        </thead>
            <tbody>
                {agendamento.length > 0 ? (
                    agendamento.map((item) => (
                        <tr key={item.id_agendamento}>
                            <th scope="row">{item.id_agendamento}</th>
                            <td>{item.Cliente ? item.Cliente.nome : 'N/A'}</td>
                            <td>{item.Cliente ? (item.Cliente.cpf || item.Cliente.cnpj) : 'N/A'}</td>
                            <td>{item.Servico ? item.Servico.nome : 'N/A'}</td>
                            <td>{item.data}</td>
                            <td>{item.hora}</td>
                            <td>{item.descricao}</td>
                            <td>{item.status}</td>
                            <div class="d-flex">
                                <Link class="btn btn-secondary mx-1" to={`/agendamento/atualizar/${item.id_agendamento}`}>
                                    Atualizar
                                </Link>
                                <button
                                    className="btn btn-danger mx-1"
                                    onClick={() => handleDeletarClick(item.id_agendamento)}
                                >
                                    Deletar
                                </button>
                            </div>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="8">Nenhum agendamento encontrado</td>
                    </tr>
                )}
            </tbody>

    </table>
</div>
    )
}
export default Listar_agendamento;