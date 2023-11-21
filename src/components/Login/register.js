import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
const register = () => {
    return(
<section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://a.espncdn.com/i/teamlogos/soccer/500-dark/2029.png"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      
      <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Criar conta<br/> </p>
            
            </div>
           
           
            <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3"><br/> </p>
            
            </div>

           
           
       
        <form>
       
        <div class="form-outline mb-3">
            <input type="text" id="form3Example4 " required class="form-control form-control-lg"
              placeholder="Nome" />
            <label class="form-label" for="form3Example4">Nome</label>
          </div>
          
          <div class="form-outline mb-3">
            <input type="text" id="form3Example4" minlength="11" maxLength="11" required  class="form-control form-control-lg"
              placeholder="CPF" />
            <label class="form-label" for="form3Example4">CPF</label>
          </div>
          

          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" required class="form-control form-control-lg"
              placeholder="Email" />
            <label class="form-label" for="form3Example3">Email</label>
          </div>

       
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" required class="form-control form-control-lg"
              placeholder="Senha" />
            <label class="form-label" for="form3Example4">Senha</label>
          </div>
          
          
          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" required class="form-control form-control-lg"
              placeholder="Confirme sua senha" />
            <label class="form-label" for="form3Example4">Confirme sua senha</label>
          </div>

          <div class="form-outline mb-3">
            <input type="date" id="form3Example4" required class="form-control form-control-lg"
              />
            <label class="form-label" for="form3Example4">Data de nascimento</label>
          </div>

          

        
            
          

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg "
             >Criar conta</button>
           
          </div>

        </form>
      </div>
    </div>
  </div>
  <div
    class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary fixed-bottom">
 
    <div class="text-white mb-3 mb-md-0 ">
      Agend.io.
    </div>


    
    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
   
  </div>
</section>
    )
  }
  export default register;