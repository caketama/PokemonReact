import React from "react";
import { Box, Image, Heading, Text } from "rebass";
import TeamButton from "./TeamButton";

const Pokemon = props => {
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
      <Heading sx={{textTransform: 'capitalize'}}>{props.name}</Heading>
      <Text mb={1}>Number: {props.number}</Text>
      <Text mb={3} sx={{textTransform: 'capitalize'}}>Type: {props.type}</Text>
      <TeamButton data={props}/>
    </Box>
  );
};
export default Pokemon;
