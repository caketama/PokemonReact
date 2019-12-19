import React from "react";
import Button from "rebass";

const DeleteButton = props => {
  const deletePokemon = async () => {
    try {
      const endpoint = "http://localhost:5000/api/delete";
      const data = {
        pokeId: props.id,
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
        props.setTeam(json_res.team);
        console.log("success");
      } else {
        console.log("SQL ERROR");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return <Button onClick={e => deletePokemon()}>Remove</Button>;
};

export default DeleteButton;
