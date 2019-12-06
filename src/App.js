import React from "react";
import Router from './components/Router'
import Header from "./components/Header";
import { Flex, Box, Image } from "rebass";
import Pokeball from "./components/Pokeball";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;
