import React, { useState, useEffect } from 'react';
import axios from 'axios';
import estados from '../estados';
import Cookies from 'js-cookie';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { Link, useNavigate } from 'react-router-dom';
const Listar_cliente = () => {
    const navigate = useNavigate();
    
    const [id_cliente, setId_cliente] = useState('');
    const [nome, setNome] = useState('');
    const [cpfcnpj, setCpfcnpj] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [clientes, setClientes] = useState([]);

    const id_loja = (Cookies.get('id_loja'));
    const token = Cookies.get('token');
    const handleFiltroSubmit = async (e) => {
        e.preventDefault();
        const tipoDocumento = cpfcnpj.length <= 11 ? 'cpf' : 'cnpj';
        const clienteBody = {
            id_loja,
            id_cliente,
            nome,
            [tipoDocumento]: cpfcnpj,
            cidade,
            estado,
            telefone,
            email
        };
        const parametros = Object.fromEntries(
            Object.entries(clienteBody).filter(([chave, valor]) => valor !== "" && valor !== null)
          );
        try {
            const response = await axios.post('http://localhost:3000/cliente/listar', parametros, {
                headers: {
                  Authorization: `Bearer ${token}`, 
                },
              });
          console.log(response.data)
          setClientes(response.data);
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
      const handleDeletarClick = async (id_cliente) => {
        const confirmarDelecao = window.confirm('Tem certeza que deseja deletar este cliente?');

        if (confirmarDelecao) {
            try {
                const response = await axios.delete(`http://localhost:3000/cliente/${id_cliente}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 201) {
                    alert('Deletado com sucesso!')
                    navigate('/cliente/listar');
                  }
            } catch (error) {
                console.error('Erro ao deletar cliente:', error);

                if (error.response && error.response.status === 401) {
                    const data = error.response.data;
                    alert(data.error);
                    navigate('/login');
                } else {
                    alert('Erro ao deletar o cliente. Por favor, tente novamente.');
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
                        <input type="text" className="form-control" id="id" placeholder="Filtrar por ID"  
                            value={id_cliente} 
                            onChange={(e) => setId_cliente(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="nome" placeholder="Filtrar por Nome"
                            value={nome} 
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="cpfcnpj" className="form-label">CPF/CNPJ</label>
                        <input type="text" className="form-control" id="cpfcnpj" placeholder="Filtrar por CPF/CNPJ" 
                            value={cpfcnpj} 
                            onChange={(e) => setCpfcnpj(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2 mb-3">
                        <label htmlFor="cidade" className="form-label">Cidade</label>
                        <input type="text" className="form-control" id="cidade" placeholder="Filtrar por Cidade"  
                            value={cidade} 
                            onChange={(e) => setCidade(e.target.value)}
                        />
                    </div>
                    <div className="col-md-2 mb-3">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <select className="form-select" id="estado"
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                        >
                        <option value="">Selecione o estado...</option>
                            {estados.map((estado) => (
                                <option key={estado.sigla} value={estado.sigla}>
                                    {estado.nome}
                                </option>
                            ))}
                        </select>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input type="text" className="form-control" id="telefone" placeholder="Filtrar por Telefone" 
                            value={telefone} 
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Filtrar por Email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
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
            <th scope="col">CPF/CNPJ</th>
            <th scope="col">Cidade</th>
            <th scope="col">Estado</th>
            <th scope="col">Telefone</th>
            <th scope="col">Email</th>
            </tr>
        </thead>
        <tbody>
            {clientes.map((cliente) => (
                <tr key={cliente.id_cliente}>
                <td>{cliente.id_cliente}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}{cliente.cnpj}</td>
                <td>{cliente.cidade}</td>
                <td>{cliente.estado}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.email}</td>
                <td>
                    <div className="d-flex">
                    <Link className="btn btn-secondary mx-1" to={`/cliente/atualizar/${cliente.id_cliente}`}>
                        Atualizar
                    </Link>
                    <button
                        className="btn btn-danger mx-1"
                        onClick={() => handleDeletarClick(cliente.id_cliente)}
                    >
                        Deletar
                    </button>
                    </div>
                </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
    )
}
export default Listar_cliente;