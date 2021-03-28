import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import NameBanner from './Components/NameBanner'


function App() {
  return (
    
    <div>
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
