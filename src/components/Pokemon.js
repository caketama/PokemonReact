import React from "react";
import { Card, Box, Image, Heading, Text } from "rebass";

const pokemon = props => {
  return (
    <Box
      sx={{
        display: "grid",
        maxWidth: "container",
        justifyContent: "center",
        gridGap: 1,
        textAlign: "center"
      }}
    >
      <Card
        sx={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "white"
        }}
      >
        <Image src={props.image} alt={props.name} />
        <Card
          sx={{
            borderWidth: ".5px",
            borderStyle: "solid",
            borderColor: "black"
          }}
        >
          <Heading p={1}>{props.name.toUpperCase()}</Heading>
          <Card
          sx={{
            maxWidth: "container"}}>
            <Card
              p={1}
              sx={{
                borderWidth: ".1px",
                borderStyle: "dotted",
                borderColor: "black"
              }}
            >
              <Text>ID: {props.id}</Text>
              <Text>Base XP: {props.xp}</Text>
              <Text>Height: {props.height}</Text>
              <Text>Weight: {props.weight}</Text>
            </Card>
          </Card>
        </Card>
      </Card>
    </Box>
  );
};

export default pokemon;
