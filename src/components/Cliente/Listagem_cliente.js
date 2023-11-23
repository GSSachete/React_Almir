import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

const listar_cliente = () => {
    return(
        <div>
            <div className="mx-3 mt-4 shadow p-3 ">
                <form>
                    <div className="row">
                    <div className="col-md-2 mb-3">
                        <label htmlFor="id" className="form-label">ID</label>
                        <input type="text" className="form-control" id="id" placeholder="Filtrar por ID" />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="nome" placeholder="Filtrar por Nome" />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="cpfcnpj" className="form-label">CPF/CNPJ</label>
                        <input type="text" className="form-control" id="cpfcnpj" placeholder="Filtrar por CPF/CNPJ" />
                    </div>
                    <div className="col-md-2 mb-3">
                        <label htmlFor="cidade" className="form-label">Cidade</label>
                        <input type="text" className="form-control" id="cidade" placeholder="Filtrar por Cidade" />
                    </div>
                    <div className="col-md-2 mb-3">
                        <label htmlFor="estado" className="form-label">Estado</label>
                        <select className="form-select" id="estado">
                        <option value="">Todos os Estados</option>
                        </select>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="telefone" className="form-label">Telefone</label>
                        <input type="text" className="form-control" id="telefone" placeholder="Filtrar por Telefone" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Filtrar por Email" />
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
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>

                <div class="d-flex">
                <a class="btn btn-secondary mx-1" href="#">Atualizar</a>
            
                <a class="btn btn-danger mx-1 " href="#">Deletar</a>
                </div>        
            
            </tr>
        </tbody>
    </table>
</div>
    )
}
export default listar_cliente;