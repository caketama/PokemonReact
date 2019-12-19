import React, { useState } from "react";
import { Box, Image, Heading, Text, Button } from "rebass";
import DeleteButton from "../components/DeleteButton";

const Team = props => {
  const [team, setTeam] = useState([]);

  const getPokemon = async () => {
    try {
      const endpoint = "http://localhost:5000/api/team";
      const data = {
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
      console.log(res);
      const json_res = await res.json();
      //      console.log(json_res);
      if (json_res) {
        setTeam(json_res.team);
        console.log("success");
      } else {
        console.log("SQL ERROR");
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (team.length < 1 ){
  getPokemon()}

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
          <DeleteButton setTeam={setTeam} id={pokemon[3]} />
        </Card>
      </Box>
    );
  });
  return (<Flex flexWrap="wrap">{myTeam}></Flex>)
};
export default Team;
