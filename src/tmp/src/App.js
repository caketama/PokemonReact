import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'emotion-theming';
import Header from './components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Lookup from './containers/Lookup';
import Team from './containers/Team';
import TeamContext from './components/TeamContext';
import theme from '@rebass/preset';
import './App.css';

function App() {

  // Make useState check sessionstorage instead of just using a default value we give it
  // Usually, it just uses a default value we pass it, but we need to give it a KEY and then check
  // sessionStorage for the VALUE associated with that key
  const useStateWithSessionStorage = sessionStorageKey => {
    const [token, setToken] = useState(sessionStorage.getItem(sessionStorageKey) || '');
    return [token, setToken];
  }

  const [token, setToken] = useStateWithSessionStorage('token');
  const [inputUser, setInputUser] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [authError, setIsAuthError] = useState(false);

  const [team, setTeam] = useState([]);

  // Hook that makes sure we store token IN BROWSER any time we set it in state
  useEffect(() => {
    sessionStorage.setItem('token', token);
  }, [token])

  const getToken = async () => {
    setIsAuthError(false);
    try {
      const endpoint = "http://localhost:5000/api/login";
      const data = {
        username: inputUser,
        password: inputPassword
      }
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        mode: "cors",
        headers: {"Content-Type": "application/json"}
      }
      const res = await fetch(endpoint, configs);
      const auth_info = await res.json();
      console.log(auth_info);
      if (auth_info.token) {
        setToken(auth_info.token)
      } else {
        setIsAuthError(true);
      }
    } catch (err) {
      console.log(err);
      setIsAuthError(true)
      }
    }


  function addToTeam (data) {
    let currentTeam = [...team];
    currentTeam.push(data);
    setTeam(currentTeam);
    console.log(team);
  }

  function removeFromTeam (data) {
    let currentTeam = [...team];
    let id = currentTeam.indexOf(data);
    currentTeam.splice(id, 1);
    setTeam(currentTeam);
    console.log(team);
  }

  let data = null;

  if (token) {
    data = (
      <TeamContext.Provider 
          value={{team:team, addToTeam:addToTeam, removeFromTeam:removeFromTeam}}
        >
        <Route path="/lookup" component={Lookup} />
        <Route path="/team" component={Team} />
        {/* <button onClick={e => setToken('')}>Log Out</button> */}
      </TeamContext.Provider>
    )
  } else {
    data = (
      <div>
        <input type="text" onChange={e => setInputUser(e.target.value)} placeholder="Username" />
        <input type="password" onChange={e => setInputPassword(e.target.value)} placeholder="Password" />
        <button onClick={e => getToken()}>Log In</button>
        { authError && <p>Authentication Error</p> }
      </div>
    )
  }

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Header logout={setToken} />
      {data}
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
