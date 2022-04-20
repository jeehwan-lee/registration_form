
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import Signin from './components/signin';
import SignInComplete from './components/SignInComplete';
import { LoginContext } from './Contexts/LoginContext';

function App() {

  const [username, setUsername] = useState('');
  return (
    <div className="App">
      <LoginContext.Provider value={{setUsername}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={username ? <Main/> : <Login/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/complete" element={<SignInComplete/>}/>
          </Routes>
        </BrowserRouter>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
