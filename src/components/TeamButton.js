import React from "react";
import TeamContext from "./TeamContext";
import { Button } from "rebass";

const TeamButton = props => {
  return (
    <TeamContext.Consumer>
      {({ team, addToTeam }) =>
        team.length < 6 && (
          <Button onClick={e => addToTeam(props.data)}>Add To Team</Button>
  )}
    </TeamContext.Consumer>
  );
};
export default TeamButton;
