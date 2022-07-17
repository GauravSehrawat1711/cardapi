import React, { useState } from "react";
import NamePlate from "./NamePlate";

const Card = ({ gender, title, first, last, email 
 ,imag,number,area,city,state,country,postcode,offset,description
}) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const [show,setShow]=useState(false);
  const [col, setColor] = useState("");
  const [textCol,setTextColor]=useState("")
  const handleClick = () => {
    setColor(" #A259FF");
    setTextColor("white")
    setShow(true);
    console.log(gender, title, first, last, email 
      ,imag,number,area,city,state,country,postcode,offset,description)
  };
  return (
    <>
    { show && <div className="nametem">
           <NamePlate gender={gender} title={title}  first={first} last={last}
           imag={imag} number={number} area={area} city={city} state={state} country={country} postcode={postcode} 
           offset={offset} description={description}/>
    </div>
}
    <div className="card carditem" style={{ width: "18rem" }}>
      <ul className="list-group list-group-flush">
        <li
          onClick={handleClick}
          style={{ backgroundColor: col ,color:textCol}}
          className="list-group-item a"
        >
          {capitalizeFirstLetter(gender)}.NL
        </li>
        <li
          onClick={handleClick}
          style={{ backgroundColor: col ,color:textCol}}
          className="list-group-item b"
        >{`${title} ${first} ${last}`}</li>
        <li
          onClick={handleClick}
          style={{ backgroundColor: col,color:textCol }}
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
