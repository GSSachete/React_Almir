import React, { useState, useEffect } from 'react';
import axios from 'axios';
import estados from '../estados';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link, useNavigate } from 'react-router-dom';

const Listar_services = () => {
    const navigate = useNavigate();
    const [id_cliente, setId_cliente] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [servicos, setServicos] = useState([]);
    const id_loja = (Cookies.get('id_loja'));
    const token = Cookies.get('token');
    const handleFiltroSubmit = async (e) => {
      e.preventDefault();
      const servicoBody = {
        id_loja,
        nome,
        preco
      };
      const parametros = Object.fromEntries(
        Object.entries(servicoBody).filter(([chave, valor]) => valor !== "" && valor !== null)
      );
      try {
        const response = await axios.post('http://localhost:3000/servico/listar', parametros, {
            headers: {
              Authorization: `Bearer ${token}`, 
            },
          });
        console.log(response.data)
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
    }
    const handleDeletarClick = async (id_servico) => {
      const confirmarDelecao = window.confirm('Tem certeza que deseja deletar este serviço?');

      if (confirmarDelecao) {
          try {
              const response = await axios.delete(`http://localhost:3000/servico/${id_servico}`, {
                  headers: {
                      Authorization: `Bearer ${token}`,
                  },
              });

              if (response.status === 201) {
                alert('Deletado com sucesso!')
                  navigate('/servico/listar');
                } 
          } catch (error) {
              console.error('Erro ao deletar servico:', error);

              if (error.response && error.response.status === 401) {
                  const data = error.response.data;
                  alert(data.error);
                  navigate('/login');
              } else {
                  alert('Erro ao deletar o servico. Por favor, tente novamente.');
              }
          }
      }
  };
    return(
      <div>
            <div className="mx-3 mt-4 shadow p-3 ">
                <form onSubmit={handleFiltroSubmit}>
                    <div className="row">
                    <div className="col-md-2 mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id"
                        placeholder="Filtrar por ID"
                        value={id_cliente}
                        onChange={(e) => setId_cliente(e.target.value)}
                    />
                </div>

                <div className="col-md-3 mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        placeholder="Filtrar por Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>

                <div className="col-md-3 mb-3">
                    <label htmlFor="preco" className="form-label">Preço</label>
                    <input
                        type="text"
                        className="form-control"
                        id="preco"
                        placeholder="Filtrar por Preço"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                    />
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
      <th scope="col">Nome</th>
      <th scope="col">Preço</th>
    </tr>
  </thead>
  <tbody>
    {servicos.map((servico) => (
    <tr key={servico.id_servico}>
      <td>{servico.id_servico}</td>
      <td>{servico.nome}</td>
      <td>{servico.preco}</td>
        <div class="d-flex">
          <Link className="btn btn-secondary mx-1" to={`/servico/atualizar/${servico.id_servico}`}>
              Atualizar
          </Link>
          <button
              className="btn btn-danger mx-1"
              onClick={() => handleDeletarClick(servico.id_servico)}
          >
              Deletar
          </button>
        </div>        
    </tr>
    ))}
  </tbody>
</table>
</div>
    )
}
export default Listar_services;