import Menu  from '../src/components/Menu/Menu';
import Footer  from '../src/components/footer';
import Login from '../src/components/Login/Login';
import Register from './components/Login/register';

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
        <Login/>
        <Footer/>
    </div>
   /*
 <div className="App">
        <Menu/>
    </div>
  */
  );
}
 

export default App;
