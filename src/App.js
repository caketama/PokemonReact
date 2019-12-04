import React, { useState, useEffect } from "react";
import pokemon from "./pokemon.jpg";
import Pokemon from "./components/Pokemon";
import { Input, Label } from "@rebass/forms";
import { ThemeProvider } from "emotion-theming";
import { Box, Button, Flex, Heading, Text, Link, Card, Image } from "rebass";
import theme from "@rebass/preset";

import "./App.css";

function App() {
  // keep track of what we send to the api
  const [data, setData] = useState({});

  // keep track of what we put into the input box
  const [query, setQuery] = useState("");

  // keep track of the loading of thepage
  const [isLoading, setIsLoading] = useState(true);

  // log errors
  const [isError, setIsError] = useState(false);

  // set sendData to async function
  const sendData = async () => {
    // update stateful variable isLoading, set to true
    setIsLoading(true);

    // update stateful variable isError, set to false
    setIsError(false);

    try {
      // send request to get data from api; promise
      const response = await fetch(`http://pokeapi.co/api/v2/pokemon/${query}`);

      // get json result from promise
      const output = await response.json();

      // update state with response from API
      setData(output);
      // console.log(output);
      // if we get an error, log it
    } catch (e) {
      // console.log(e);

      // update error state if we have an error
      setIsError(true);
    }
    setIsLoading(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="App">
        {/* if error is true, set result */}
        <Flex px={2} color="white" bg="black" alignItems="center">
          <Text p={2} fontWeight="bold">
            {" "}
            Elit provident eveniet!
          </Text>
          <Box mx="auto" />
          <Link variant="nav" href="#!">
            Poke?
          </Link>
        </Flex>
        <Text>{isError ? <p>Error in request</p> : null}</Text>

        {/* keep track of input typed into input box and update state */}
        <Image src={pokemon} padding="-5px" width={1 / 3} />

        <Flex padding="10px">
          {/* <Label htmlFor="name">Name</Label> */}
          <Box width={1 / 3}></Box>
          <Input
            width={1 / 3}
            id="name"
            name="name"
            onChange={e => setQuery(e.target.value)}
          />
          <Box width={1 / 3}></Box>
        </Flex>

        {/* set button click to send data based on input */}
        <Button onClick={e => sendData(data)}>Search</Button>

        {/* if is loading return is loading, if false, return data */}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
            <Pokemon
              name={data.name}
              id={data.id}
              image={data.sprites.front_default}
            />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
