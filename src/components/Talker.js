import React from "react";
import Button from "./Button";

function talk() {
  let speech = "";
  for (let i = 0; i < 10000; i++) {
    speech += "blah ";
  }
  alert(speech);
}

function Talker() {
  return <Button />;
}

export default Talker;
