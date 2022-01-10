import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import Footer from './componentes/Footer';
import carrito from './assets/img/carrito';



function App() {
  return (
    <div className="App">
      <NavBar />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
