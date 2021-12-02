import React, {useState} from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushi, showMore, eatSushi }) {
  
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushi.map(s => (
        <Sushi key={s.id} sushiObj={s} handleClick={eatSushi}/>
      ))}
      <MoreButton handleClick={showMore} />
    </div>
  );
}

export default SushiContainer;
