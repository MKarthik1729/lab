import { useState } from 'react';
import './App.css';
import Navbar from './navbar';
import Page from './Page';

function App() {
  const [toggle,setToggle] = useState(0)
  return (
    <div className="App">
      <Navbar toggle={toggle} setToggle={setToggle}/>
    <Page toggle={toggle} setToggle={setToggle}/>
    </div>
  );
}

export default App;