import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import styles from '../Service/service.module.css'
const CadastrarService = () => {
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
          <label className="form-label" for="nome">Nome</label>
            <input type="text" name="nome" id="nome" required className="form-control form-control-lg"
              placeholder="Nome" />
          </div>
       
          <div className="form-group mb-3">
          <label className="form-label" for="valor">Preço</label>
            <input type="text" name="valor" id="valor" required className="form-control form-control-lg"
              placeholder="Preço" />
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
  export default CadastrarService;