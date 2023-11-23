import Menu  from '../src/components/Menu/Menu';
import Footer  from '../src/components/footer';
import Login from '../src/components/Login/Login';
import Register from './components/Login/register';
import Attcliente from './components/Cliente/AtualizarCliente';
import Listar_cliente from './components/Cliente/Listagem_cliente';

/*
function App() {
  const [LoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  }
  const handleLogout = () => {
    setLoggedIn(false);
  }

  return (
    <div className="App">
      <header className="App-header">
        {LoggedIn ? (
          <Order onLogout={handleLogout} />
        ) : (
          <Login onLogin={handleLogin} /> 
        )}
      </header>
    </div>
  );
}
*/

function App() {
  return (
    
    <div className="App">
        <Menu/>
        <Listar_cliente/>
      
    </div>
   /*
 <div className="App">
        <Menu/>
    </div>
  */
  );
}
 

export default App;
