import React from 'react';
import { Box, Image, Heading, Text, Button } from 'rebass';
import TeamButton from './TeamButton';

const pokemon = (props) => {

  const addPokemon = async () => {
    try {
      const endpoint = "http://localhost:5000/api/add";
      const data = {
      name: props.name,
      image_path: props.image,
      number: props.number,
      token: sessionStorage.getItem('token')
      }
      const configs = {
      method: "POST",
      body: JSON.stringify(data),
      mode: "cors",
      headers: {"Content-Type": "application/json"}
      }
      const res = await fetch(endpoint, configs);
      const json_res = await res.json();
      console.log(json_res);
      if (json_res.status === "success") {
        console.log("success")
      } else {
        console.log("SQL ERROR");
      }
    } catch (err) {
      console.log(err);
      }
    }


    return (
        <Box
          sx={{
              p:4,
              color: 'text',
              fontFamily: 'body',
              fontWeight: 'body',
              lineHeight: 'body',
              justifyContent: 'center',
              textAlign: 'center'
          }}>
          <Image src={props.image} alt={props.name}/>
          <Heading sx={{textTransform: 'capitalize'}}>{props.name}</Heading>
          <Text mb={1}>Number: {props.number}</Text>
          <Text sx={{textTransform: 'capitalize'}} mb={3}>Type: {props.type}</Text>
          <Text mb={1}>Attack: {props.number}</Text>
          <Text mb={1}>Defense: {props.number}</Text>
          <Text mb={1}>Special Attack: {props.number}</Text>
          <Text mb={1}>Special Defense: {props.number}</Text>
          <Text mb={1}>Speed: {props.number}</Text>
          {/* <TeamButton data={props} /> */}
          <Button onClick={e => addPokemon()}>Add to Team</Button>
        </Box>
    )
}

export default pokemon;

