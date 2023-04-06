/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import './App.css';
import Auth from './Components/Auth/Auth';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

function App(){
  return(
    <div className="App">
      <Auth/>
      <Login/>
      <Signup/>
    </div>
  );

}
export default App;