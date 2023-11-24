import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'

const relatorio_datas = () => {
    return(
        <div>
            <div className="mx-3 mt-4 shadow p-3 ">
                <form>
                <div className="form-group mb-3">
                <select class="form-select" aria-label="Default select example"  id="mes">
                     <option selected>Filtrar por mês</option>
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
                        <input type="text" className="form-control" id="dia" placeholder="Filtrar por dia" />
                    </div>
                    <div className="col-md-3 mb-3">
                        <label htmlFor="hora" className="form-label">Horario</label>
                        <input type="time" className="form-control" id="hora" placeholder="Filtrar por hora" />
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
            
        </div>
    )
}

export default relatorio_datas;