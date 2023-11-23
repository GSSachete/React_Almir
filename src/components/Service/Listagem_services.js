import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

const listar_services = () => {
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
                        <label htmlFor="nome" className="form-label">Preço</label>
                        <input type="text" className="form-control" id="preço" placeholder="Filtrar por Preço" />
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


<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Preço</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      

        <div class="d-flex">
            <a class="btn btn-secondary mx-1" href="#">Atualizar</a>
        
            <a class="btn btn-danger mx-1 " href="#">Deletar</a>
            </div>        
    
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
    
      <div class="d-flex">
            <a class="btn btn-secondary mx-1" href="#">Atualizar</a>
        
            <a class="btn btn-danger mx-1" href="#">Deletar</a>
            </div>       
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td >The Bird</td>
    
      <div class="d-flex">
            <a class="btn btn-secondary mx-1" href="#">Atualizar</a>
        
            <a class="btn btn-danger mx-1" href="#">Deletar</a>
            </div>       
    </tr>
  </tbody>
</table>
</div>
    )
}
export default listar_services;