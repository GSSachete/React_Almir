import React, { useState, useEffect } from 'react';
import axios from 'axios';
import estados from '../estados';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link, useNavigate } from 'react-router-dom';

const Relatorio_datas = () => {
    const navigate = useNavigate();
    const [ano, setAno] = useState('');
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');
    const [agendamentoData, setAgendamentoData] = useState([]);
    const handleFiltroSubmit = async (e) => {
        e.preventDefault();
        const id_loja = (Cookies.get('id_loja'));
        const token = Cookies.get('token');
        const RelatorioBody = {
          id_loja,
          ano,
          mes,
          dia

        };
        const parametros = Object.fromEntries(
          Object.entries(RelatorioBody).filter(([chave, valor]) => valor !== "" && valor !== null)
        );
        try {
          const response = await axios.post('http://localhost:3000/agendamento/relatorio', parametros, {
              headers: {
                Authorization: `Bearer ${token}`, 
              },
            });
          console.log(response.data)
          setAgendamentoData(response.data);
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
    return(
        <div>
            <div className="mx-3 mt-4 shadow p-3 ">
                <form onSubmit={handleFiltroSubmit}>
                <div className='row'>
                <div className="form-group col-md-3 mb-3">
                    <label htmlFor="mes" className="form-label">Filtrar por mês</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        id="mes"
                        value={mes}
                        onChange={(e) => setMes(e.target.value)}
                    >
                        <option value="" disabled selected>Selecione um mês</option>
                        <option value="1">Janeiro</option>
                        <option value="2">Fevereiro</option>
                        <option value="3">Março</option>
                        <option value="4">Abril</option>
                        <option value="5">Maio</option>
                        <option value="6">Junho</option>
                        <option value="7">Julho</option>
                        <option value="8">Agosto</option>
                        <option value="9">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                    </select>
                </div>

                <div className="col-md-3 mb-3">
                        <label htmlFor="dia" className="form-label">Dia</label>
                        <input
                            type="text"
                            className="form-control"
                            id="dia"
                            placeholder="Filtrar por dia"
                            value={dia}
                            onChange={(e) => setDia(e.target.value)}
                        />
                    </div>
                    <div className="form-group col-md-3 mb-3">
                        <label htmlFor="ano" className="form-label">Filtrar por ano</label>
                        <input
                            type="text"
                            className="form-control"
                            id="ano"
                            placeholder="Filtrar por ano"
                            value={ano}
                            onChange={(e) => setAno(e.target.value)}
                        />
                    </div>
                    </div>
                    <div className="form-group mb-3">
                 </div>
                    <div className="row d-flex justify-content-end">    
                        <div className="col-md-4 mb-3">
                            <button type="submit" className="btn btn-primary">Aplicar Filtros</button>
                            <button type="reset" className="btn btn-secondary ms-2">Limpar Filtros</button>
                        </div>
                    </div>
                    </form>   
                </div>
                <table className="table table-striped my-4 mx-3">
                <thead>
                    <tr>
                    <th>Data</th>
                    <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    {agendamentoData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.data}</td>
                        <td>{item.quantidade}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
        </div>
        
    )
}

export default Relatorio_datas;