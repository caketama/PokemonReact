import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import LookUp from "./containers/LookUp";
import Team from "./containers/Team2";
import TeamContext from "./components/TeamContext";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";

function App() {
  const useStateWithSessionStorage = sessionStorageKey => {
    const [token, setToken] = useState(
      sessionStorage.getItem(sessionStorageKey) || ""
    );
    return [token, setToken];
  };

  const [token, setToken] = useStateWithSessionStorage("token");
  const [inputUser, setInputUser] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [authError, setIsAuthError] = useState(false);

  // Hook that makes sure we set toke IN BROWSER anytime we set it in state
  useEffect(() => {
    sessionStorage.setItem("token", token);
  }, [token]);

  const getToken = async () => {
    setIsAuthError(false);
    try {
      const endpoint = "http://localhost:5000/api/login";
      const data = {
        username: inputUser,
        password: inputPassword
      };
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        mode: "cors",
        headers: { "Content-Type": "application/json" }
      };
      const res = await fetch(endpoint, configs);
      const auth_info = await res.json();
      console.log(auth_info);
      if (auth_info.token) {
        setToken(auth_info.token);
      } else {
        setIsAuthError(true);
      }
    } catch (error) {
      setIsAuthError(true);
      console.log(error);
    }
  };

  const [team, setTeam] = useState([]);

  function addToTeam(data) {
    let currentTeam = [...team];
    currentTeam.push(data);
    setTeam(currentTeam);
    console.log(team);
  }

  function removeFromTeam(data) {
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
        value={{
          team: team,
          addToTeam: addToTeam,
          removeFromTeam: removeFromTeam
        }}
      >
        <Route path="/lookup" component={LookUp} />
        <Route path="/myteam" component={Team} />
        <button onClick={e => setToken("")}>Log Out</button>
      </TeamContext.Provider>
    );
  } else {
    data = (
      <div>
        <input
          type="text"
          onChange={e => setInputUser(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          onChange={e => setInputPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={e => getToken()}>Log in</button>
        {authError && <p> Auth error</p>}
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        {data}
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
