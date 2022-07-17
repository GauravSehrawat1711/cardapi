import React, { useState } from "react";
import "../App.css";

const Card = ({
  gender,
  title,
  first,
  last,
  email,
  imag,
  number,
  area,
  city,
  state,
  country,
  postcode,
  offset,
  description,
  getDivValue,
  allValues,
}) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [col, setColor] = useState("");
  const [textCol, setTextColor] = useState("");
  const handleClick = () => {
    setColor("#A259FF");
    setTextColor("white");

    getDivValue(true);
    let arr = [gender,title,first,last,email,imag,number,area,city,state,country,postcode,offset,description,];
    allValues(arr);
  };
  return (
    <>
      <div className="card carditem" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <li
            onClick={handleClick}
            style={{ backgroundColor: col, color: textCol }}
            className="list-group-item a"
          >
            {capitalizeFirstLetter(gender)}.NL
          </li>
          <li
            onClick={handleClick}
            style={{ backgroundColor: col, color: textCol }}
            className="list-group-item b"
          >{`${title} ${first} ${last}`}</li>
          <li
            onClick={handleClick}
            style={{ backgroundColor: col, color: textCol }}
            className="list-group-item c"
          >
            {email}
          </li>
        </ul>
      </div>
    </>
  );
};

export default Card;
