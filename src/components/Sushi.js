import React from "react";

function Sushi({ sushiObj, handleClick }) {
  const {img_url, name, price, eaten} = sushiObj;
  console.log("SUSHIOBJ in SUSHI", sushiObj)
  
  return (
    <div className="sushi">
      <div className="plate" onClick={() => {handleClick(sushiObj)}}>
        {/* Tell me if this sushi has been eaten! */}
        {sushiObj.eaten ? null : (
          <img
            src={img_url}
            alt=""
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
