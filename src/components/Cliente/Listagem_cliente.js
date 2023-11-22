import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

const listar_cliente = () => {
    return(
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">cpf/cnpj</th>
      <th scope="col">cidade</th>
      <th scope="col">estado</th>
      <th scope="col">telefone</th>
      <th scope="col">email</th>
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
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <div class="d-flex">
            <a class="btn btn-secondary mx-1" href="#">Atualizar</a>
        
            <a class="btn btn-danger mx-1" href="#">Deletar</a>
            </div>       
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry the Bird</td>
      <td >The Bird</td>
      <td>@twitter</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <div class="d-flex">
            <a class="btn btn-secondary mx-1" href="#">Atualizar</a>
        
            <a class="btn btn-danger mx-1" href="#">Deletar</a>
            </div>       
    </tr>
  </tbody>
</table>
    )
}
export default listar_cliente;