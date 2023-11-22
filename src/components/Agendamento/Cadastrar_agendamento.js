import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import styles from '../Service/service.module.css'
const CadastrarAgendamento = () => {
    return(
<section className="vh-100">
  <div className="container-fluid h-custom">
  <div className="row d-flex justify-content-center align-items-center h-100 ">
  
      <div className= "col-md-8 col-lg-6 col-xl-4 offset-xl-1 my-3">
      
      <div className="d-flex flex-row">
        
      <p className={"lead fw-normal me-3 " + styles["estiloletra"]}>Cadastrar serviço<br/> </p>
            
            </div>
        <form className="mt-1">
        <div className="form-outline mb-3">
            
        
          </div>
        <div className="form-group mb-3">
        <select class="form-select" aria-label="Default select example" for="servico" name="servico" id="servico">
             <option selected>Selecione o serviço</option>
             <option value="1">One</option>
             <option value="2">Two</option>
             <option value="3">Three</option>
</select>
          </div>
       
          <div className="form-group mb-3">
          <label className="form-label" for="date">Data</label>
            <input type="date" name="date" id="date" required className="form-control form-control-lg"/>
          </div>

          <div className="form-group mb-3">
          <label className="form-label" for="time">Horario</label>
            <input type="time" name="time" id="time" required className="form-control form-control-lg"/>
          </div>
         
         
          <div className="form-group mb-3">
          <label className="form-label" for="desc">Descrição</label>
            <input type="text" name="desc" id="desc" required className="form-control form-control-lg"/>
          </div>

          <div className="form-group mb-3">
        <select class="form-select" aria-label="Default select example" for="cliente" name="cliente" id="cliente">
             <option selected>Selecione o cliente</option>
             <option value="1">One</option>
             <option value="2">Two</option>
             <option value="3">Three</option>
</select>
</div>



          <div className="text-center text-lg-start mt-4 pt-2">
          <button type="button" class="btn btn-success">Cadastrar</button>
           
          </div>
        </form>
      </div>
    </div>
  </div>
  <div
    className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary fixed-bottom">
 
    <div className="text-white mb-3 mb-md-0 ">
      Agend.io.
    </div>
    
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google"></i>
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
   
  </div>
</section>
    )
  }
  export default CadastrarAgendamento;