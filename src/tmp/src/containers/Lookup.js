import React, { useState, useEffect } from 'react';
import Pokemon from '../components/Pokemon';
import { Input } from '@rebass/forms';
import { Box, Button, Flex } from 'rebass';

function Lookup() {

  const [data, setData] = useState({});
  const [query, setQuery] = useState('');

  const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}`)
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect( () => {
    const sendData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch(url);
        const output = await response.json();
        setData(output);
        console.log(output);
      } catch (error) {
        console.log(error);
        setIsError(true);
      };
      setIsLoading(false);
    };
  sendData();
  }, [url]);

  const setRandom = () => {
    setUrl(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151)}`);
  }

  return (
      <Box>
        {/* { isLoading && <p>Loading...</p> } */}
        { isError && <p>Error in request</p> }
        <Flex padding="12px">
          <Box width={1/3}></Box>
          {/* <Label htmlFor="name">Name</Label> */}
          <Input width={1/3} id='name' name='name' onChange={e => setQuery(e.target.value)} />
          <Box width={1/3}></Box>
        </Flex>
        <Flex sx={{justifyContent:"center"}}>
        <Button onClick={e => setUrl(`https://pokeapi.co/api/v2/pokemon/${query}`)}>Search</Button>
        <Button mx={3} onClick={e => setRandom()}>Random</Button>
        </Flex>
        {isLoading ? (
          <p>Loading...</p> 
        ) : (
          <Pokemon name={data.name} 
                   type={data.types[0].type.name} 
                   number={data.id} 
                   image={data.sprites.front_default} 
          />
        )}
      </Box>
  );
}

export default Lookup;
