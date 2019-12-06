import React, { useState, useEffect } from "react";
import pokemon from '../pokemon.jpg'
import { Card, Box, Image, Heading, Text } from "rebass";
import { Input, Label } from "@rebass/forms";
import { ThemeProvider } from "emotion-theming";
import { Button, Flex, Link } from "rebass";
import theme from "@rebass/preset";
function Pokemon() {

  // keep track of what we send to the api
  const [data, setData] = useState({});

  // keep track of what we put into the input box
  const [query, setQuery] = useState("");

  const [url, setUrl] = useState(
    `http://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}`
  );
  // keep track of the loading of thepage
  const [isLoading, setIsLoading] = useState(true);

  // log errors
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // set sendData to async function
    const sendData = async () => {
      // update stateful variable isLoading, set to true
      setIsLoading(true);

      // update stateful variable isError, set to false
      setIsError(false);

      try {
        // send request to get data from api; promise
        const response = await fetch(url);

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
    sendData();
  }, [url]);

  const setRandom = () => {
    setUrl(
      `http://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 800)}`
    );
  };
  return (
    // Add loading logic
      <ThemeProvider theme={theme}>
        <Box className="App">
          {/* if error is true, set result */}
          <Flex px={2} color="white" bg="black" alignItems="center">
          </Flex>
          <Text>{isError ? <p>Error in request</p> : null}</Text>

          {/* keep track of input typed into input box and update state */}
          <Image src={pokemon} padding="5px" width={1 / 3} />

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
            {console.log(data)}
          </Flex>

          {/* set button click to send data based on input */}
          <Button
            backgroundColor="black"
            color="white"
            onClick={e => setUrl(`http://pokeapi.co/api/v2/pokemon/${query}`)}
          >
            Search
          </Button>
          <Button
            backgroundColor="black"
            color="white"
            mx={3}
            onClick={e => setRandom()}
          >
            Random
          </Button>

          {/* if is loading return is loading, if false, return data */}
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <Pokemon
              name={data.name}
              id={data.id}
              xp={data.base_experience}
              weight={data.weight}
              height={data.height}
              image={data.sprites.front_default}
            />
          )}
        </Box>
    <div>
      <input onChange={e => setQuery(e.target.value)} />
      <button onClick={e => setData(data)}>Search</button>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <img src={data.sprites.front_shiny} />
          <h3>{data.name}</h3>
          <p>{data.id}</p>
        </div>
      )}
    </div>
  );
}
  return (
    <Box
      p={3}
      sx={{
        display: "grid",
        maxWidth: "container",
        justifyContent: "center",
        gridGap: 1,
        textAlign: "center"
      }}
    >
      <Card >
        <Image src={data.image} alt={data.name} />
        <Card
          sx={{
            borderRadius: "10px",
            borderWidth: ".5px",
            borderStyle: "solid",
            borderColor: "black"
          }}
        >
          <Heading sx={{textTransform: 'capitalize'}} mb={20}>{data.name}</Heading>
            <Card
              sx={{
                borderWidth: ".1px",
                borderStyle: "dotted",
                borderColor: "black"
              }}
            >
              <Text mb={1}>ID: {data.id}</Text>
              <Text mb={1}>Base XP: {data.xp}</Text>
              <Text mb={1}>Height: {data.height}</Text>
        </Card>
        </Card>
      </Card>
    </Box>
      </ThemeProvider>
  );
};

export default pokemon;
