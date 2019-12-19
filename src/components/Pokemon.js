import React from "react";
import { Box, Image, Heading, Text, Button } from "rebass";
// import TeamButton from "./TeamButton";

const pokemon = props => {
  const addPokemon = async () => {
    try {
      const endpoint = "http://localhost:5000/api/add";
      const data = {
        name: props.name,
        image_path: props.image,
        number: props.number,
        token: sessionStorage.getItem("token")
      };
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        mode: "no-cors",
        headers: { "Content-Type": "application/json" }
      };
      console.log(data);
      const res = await fetch(endpoint, configs);
      console.log(res)
      const json_res = await res.json();
//      console.log(json_res);
      if (json_res.status === "success") {
        console.log("success");
      } else {
        console.log("SQL ERROR");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Box
      sx={{
        p: 4,
        color: "text",
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      <Image src={props.image} alt={props.name} />
      <Heading sx={{ textTransform: "capitalize" }}>{props.name}</Heading>
      <Text mb={1}>Number: {props.number}</Text>
      <Text mb={3} sx={{ textTransform: "capitalize" }}>
        Type: {props.type}
      </Text>
      <Button onClick={e => addPokemon()}>Add Pokemon</Button>
    </Box>
  );
};
export default pokemon;
