import React from "react";
import { Button, Card, Image, Heading, Flex } from "rebass";
import TeamContext from "../components/TeamContext";

const Team = props => {
  return (
    <TeamContext.Consumer>
      {({ team, removeFromTeam }) => {
        let myTeam = team.map(props => {
          // return some JSX for each element in our team array
          // This JSX should include a button that contains
          // the removeFromTeam function
        });
        return <div>{myTeam}</div>
      }}
    </TeamContext.Consumer>
  );
};

export default Team;
