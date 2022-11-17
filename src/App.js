import './App.css';
import Navbar from './components/navbar.mjs';

function App() {
  return (
    <>
    {/* we can pass values that is going to render in rect components in key = value pairs  */}
      <Navbar title='hubsl' menu1="HOME"/>
    </>
  );
}

export default App;
