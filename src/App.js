import './App.css';

import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import ServiceCard from './components/ServiceCard';

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
