import './App.css';
import Home from './Components/Home';
import Login from './Components/Log/login';
import SignUp from './Components/Log/signup'; 
import { Route,Routes } from 'react-router';

function App() {
  return (
    <div className='App'>
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='SignUp' element={<SignUp/>}/>
      </Routes>
      
    </div>
  );
  }

export default App;
