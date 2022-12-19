import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar.mjs';
import TextForm from './components/TextForm.mjs';
// import About from './components/About.js';

function App() {
  const [mode,setMode] = useState('light')

  const switchClick = (data) => {
    // setMode(data)
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor ="#090942"
    }else{
      setMode('light')
      document.body.style.backgroundColor ="white"
    }
  }

  return (
    <>
    {/* we can pass values that is going to render in rect components in key = value pairs  */}
      <Navbar title='hubsl' mode={mode} switchClick={switchClick} menu1="HOME"/>
      <TextForm mode={mode} heading="Example of props"/>
      {/* <About/> */}
    </>
  );
}

export default App;
