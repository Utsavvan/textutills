import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/navbar.mjs';
import TextForm from './components/TextForm.mjs';
// import About from './components/About.js';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type : type,
      msg : message,
    })
    setTimeout(()=>{
      setAlert(null)
    },1000)
  }

  const switchClick = (data) => {
    // setMode(data)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#001e3c"
      showAlert('success',"Dark mode is enabled")
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert('success',"Light mode is enabled")
    }
  }

  return (
    <>
      {/* we can pass values that is going to render in rect components in key = value pairs  */}
      <Navbar title='hubsl' mode={mode} switchClick={switchClick} menu1="HOME" />
      <Alert alert={alert} showalert={showAlert} />
      <TextForm mode={mode} showalert={showAlert} heading="This is title by props" />
      {/* <About/> */}
    </>
  );
}

export default App;
