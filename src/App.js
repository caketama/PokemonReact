import React, { useState } from "react";
import Header from "./components/Header";
import LookUp from "./containers/LookUp";
import Team from "./containers/Team";
import TeamContext from "./components/TeamContext";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "emotion-theming";
import theme from "@rebass/preset";

function App() {
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

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <TeamContext.Provider
          value={{
            team: team,
            addToTeam: addToTeam,
            removeFromTeam: removeFromTeam
          }}
        >
          <Route path="/lookup" component={LookUp} />
          <Route path="/myteam" component={Team} />
        </TeamContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
