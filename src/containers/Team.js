import React from "react";
import { Button, Card, Image, Heading, Flex, Box, Text } from "rebass";
import TeamContext from "../components/TeamContext";

const Team = props => {
  return (
    <TeamContext.Consumer>
      {({ team, removeFromTeam }) => {
        let myTeam = team.map(props => {
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
                <Image p={2} src={props.image} />
                <Heading fontSize={3} sx={{ textTransform: "capitalize" }}>
                  Name: {props.name}
                </Heading>
                <Text p={2}>Type: {props.type}</Text>
                <Button
                  mx={2}
                  onClick={removeFromTeam}
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
    </TeamContext.Consumer>
  );
};

export default Team;
