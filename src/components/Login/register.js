import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import styles from './register.module.css'
const register = () => {
    return(
<section className="vh-100">
  <div className="container-fluid h-custom">
  <div className="row d-flex justify-content-center align-items-center h-100 ">
      <div className="col-md-9 col-lg-6 col-xl-5 ">
        <img src="https://a.espncdn.com/i/teamlogos/soccer/500-dark/2029.png"
          className="img-fluid" alt="Sample image"/>
      </div>
      <div className= "col-md-8 col-lg-6 col-xl-4 offset-xl-1 my-3">
      
      <div className="d-flex flex-row">
        
            <p className={"lead fw-normal me-3 " + styles["estiloletra"]}>Criar conta<br/> </p>
            
            </div>
           
           
         

           
           
       
        <form className="mt-1">
       
        <div className="form-group mb-3">
          <label className="form-label" for="nome">Nome</label>
            <input type="text" name="nome" id="nome" required className="form-control form-control-lg"
              placeholder="Nome" />
          </div>
          
          <div className="form-outline mb-3">
            <label className="form-label" for="cpf">CPF</label>
            <input type="text" name="cpf" id="cpf" minlength="11" maxLength="11" required  className="form-control form-control-lg"
              placeholder="CPF" />
          </div>
          

          <div className="form-outline mb-4">
            <label className="form-label" for="email">Email</label>
            <input type="email" name ="email "id="email" required className="form-control form-control-lg"
              placeholder="Email" />
          </div>

       
          <div className="form-outline mb-3">
            <label className="form-label" for="senha">Senha</label>
            <input type="password" name="senha"id="senha" required className="form-control form-control-lg"
              placeholder="Senha" />
          </div>
          
          
          <div className="form-outline mb-3">
            <label className="form-label" for="confsenha">Confirme sua senha</label>
            <input type="password" name = "confsenha"id="confsenha" required className="form-control form-control-lg"
              placeholder="Confirme sua senha" />
          </div>

          <div className="form-outline mb-3 ">
            <label className="form-label" for="form3Example4">Data de nascimento</label>
            <input type="date" id="form3Example4" required className="form-control form-control-lg"
              />
          </div>

          

        
            
          

          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="button" className="btn btn-primary btn-lg "
             >Criar conta</button>
           
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
  export default register;