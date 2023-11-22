import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
const footer = () => {
    return(
<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-primary text-light">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
        
      </a>
      <span class="mb-3 mb-md-0 text-light">© 2023 Agendio</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><a class="text-light" href="#"><span class="bi" width="24" height="24">twitter</span></a></li>
      <li class="ms-3"><a class="text-light" href="#"><span class="bi" width="24" height="24">instagram</span></a></li>
      <li class="ms-3"><a class="text-light" href="#"><span class="bi" width="24" height="24">facebook</span></a></li>
    </ul>
</footer>
    )
    }
export default footer;