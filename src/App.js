import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import NameBanner from './Components/NameBanner/NameBanner'
import NavBar from './Components/NavBar/NavBar';


function App() {
  return (
    
    <div>
      <NavBar/>
      <Header/>      
      
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>

    </div>
  );
}

export default App;
