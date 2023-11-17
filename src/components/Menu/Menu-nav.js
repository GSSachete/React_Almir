import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'


const menu_nav = () => {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Agend.io</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse my-6 my-lg-0" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown mx-2">
                <a class="nav-link active dropdown-toggle" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Agendar</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Cadastrar</a></li>
                  <li><a class="dropdown-item" href="#">Atualizar</a></li>
                  <li><a class="dropdown-item" href="#">Listagem</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown mx-2">
                <a class="nav-link active dropdown-toggle" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Serviços</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Cadastrar</a></li>
                  <li><a class="dropdown-item" href="#">Atualizar</a></li>
                  <li><a class="dropdown-item" href="#">Listagem</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown mx-2">
                <a class="nav-link active dropdown-toggle" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Clientes</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Cadastrar</a></li>
                  <li><a class="dropdown-item" href="#">Atualizar</a></li>
                  <li><a class="dropdown-item" href="#">Listagem</a></li>
                </ul>
              </li>
              <li class="nav-item dropdown mx-2">
                <a class="nav-link active dropdown-toggle" aria-current="page" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Relatório</a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Agendamentos</a></li>
                  <li><a class="dropdown-item" href="#">Quantidade de Agendamentos</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="d-flex">
            <a class="btn btn-danger btn-sn" href="#">Sair</a>
          </div>
        </div>
      </nav>
    )
}
export default menu_nav;