
import './App.css';

import Navbar from "./components/Navbar/Navbar"
import Navbar2 from "./components/Navbar2/Navbar2"
import Home from './components/Home/Home';

function App(){
  return(
    <div className="App">
      <Navbar />
      <Navbar2/>
      <Home/>
    </div>
  );
}

export default App;
