import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

const listar_agendamento = () => {
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
                        <input type="text" className="form-control" id="Cliente" placeholder="Filtrar por Cliente" />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="cpfcnpj" className="form-label">CPF/CNPJ</label>
                        <input type="text" className="form-control" id="cpfcnpj" placeholder="Filtrar por CPF/CNPJ" />
                    </div>
                    <div className="col-md-2 mb-3">
                        <label htmlFor="cidade" className="form-label">Serviço</label>
                        <input type="text" className="form-control" id="servico" placeholder="Filtrar por Serviço" />
                    </div>
                    <div className="col-md-2 mb-3">
                        <label htmlFor="cidade" className="form-label">Preço</label>
                        <input type="text" className="form-control" id="preco" placeholder="Filtrar por Preço" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="telefone" className="form-label">Data</label>
                        <input type="date" className="form-control" id="data" placeholder="Filtrar por Data" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="email" className="form-label">Hora</label>
                        <input type="time" className="form-control" id="hora" placeholder="Filtrar por Horário" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="email" className="form-label">Descrição</label>
                        <input type="text" className="form-control" id="descricao" placeholder="Filtrar por descrição" />
                    </div>
                    <div className="form-group mb-3">
                <select class="form-select" aria-label="Default select example"  id="status">
                     <option selected>Filtrar por status</option>
                     <option value="1">Aberto</option>
                     <option value="2">Concluido</option>
                     <option value="3">Cancelado</option>
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
            <th scope="col">Preço</th>
            <th scope="col">Data</th>
            <th scope="col">Hora</th>
            <th scope="col">Descrição</th>
            <th scope="col">Status</th>
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
export default listar_agendamento;