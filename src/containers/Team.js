import React from "react";
import { Button, Card, Image, Heading, Flex, Box, Text } from "rebass";
import TeamContext from "../components/TeamContext";

const Team = pokemon => {
  return (
//    <TeamContext.Consumer>
      {({ team, removeFromTeam }) => {
        let myTeam = team.map(pokemon => {
          return (
            <Box
              width={1 / 3}
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
              <Card>
                <Image p={2} src={pokemon.image} />
                <Heading fontSize={3} sx={{ textTransform: "capitalize" }}>
                  Name: {pokemon.name}
                </Heading>
                <Text p={2}>Type: {pokemon.type}</Text>
                <Button
                  mx={2}
                  onClick={e => removeFromTeam(pokemon)}
                >
                  Remove
                </Button>
              </Card>
            </Box>
          );
          // return some JSX for each element in our team array
          // This JSX should include a button that contains
          // the removeFromTeam function
        });
        console.log({ team });
        return <Flex sx={{ flexWrap: "wrap" }}>{myTeam}</Flex>;
      }}
 //   </TeamContext.Consumer>
  );
};

export default Team;
