import './App.css';
import Navbar from './components/navbar.mjs';
import TextForm from './components/TextForm.mjs';
import About from './components/About.js';

function App() {
  return (
    <>
    {/* we can pass values that is going to render in rect components in key = value pairs  */}
      <Navbar title='hubsl' menu1="HOME"/>
      {/* <TextForm heading="Example of props"/> */}
      <About/>
    </>
  );
}

export default App;
