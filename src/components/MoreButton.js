import React from "react";

function MoreButton({ handleClick }) {
  return <button onClick={() => handleClick()}>More sushi!</button>;
}

export default MoreButton;
