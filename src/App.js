import "./App.css";
import Navbar from "./components/Navbar";
import NamePlate from "./components/NamePlate";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import React from "react";
function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [allValue, setAllValue] = useState([]);

  const allValues = (arr) => {
    setAllValue(arr);
  };
  const getDivValue = (string) => {
    setShow(string);
  };

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    let result = await fetch(
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020"
    );
    result = await result.json();

    setData(result.results);
  };
  return (
    <>
      <Navbar />
      {show && (
        <div className="nametem">
          <NamePlate
            gender={allValue[0]}
            title={allValue[1]}
            first={allValue[2]}
            last={allValue[3]}
            imag={allValue[5]}
            number={allValue[6]}
            area={allValue[7]}
            city={allValue[8]}
            state={allValue[9]}
            country={allValue[10]}
            postcode={allValue[11]}
            offset={allValue[12]}
            description={allValue[13]}
          />
        </div>
      )}

      <div className="outerContainer">
        <div className="innerContainer">
          {data.map((item, i) => (
            <Card
              gender={item.gender}
              key={i}
              title={item.name.title}
              first={item.name.first}
              last={item.name.last}
              email={item.email}
              imag={item.picture.large}
              number={item.location.street.number}
              area={item.location.street.name}
              city={item.location.city}
              state={item.location.state}
              country={item.location.country}
              postcode={item.location.postcode}
              offset={item.location.timezone.offset}
              description={item.location.timezone.description}
              getDivValue={getDivValue}
              allValues={allValues}
              show={show}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
