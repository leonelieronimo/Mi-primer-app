import logo from './logo.svg';
import './App.css';
import Header from './componentes/Header';
import Footer from './componentes/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <button className = "btn btn-success">BOTON</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MERCADO YA
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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
