import logo from './logo.svg';
import './App.css';
import Principal from './Principal'
import Header from './Header'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Principal />
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
