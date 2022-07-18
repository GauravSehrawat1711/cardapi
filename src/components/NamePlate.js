import React from 'react'
import "../App.css"

const NamePlate = ({gender, title, first, last,imag,number,area,city,state,country,postcode,offset,description}) => {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
  return (
    <div className='mainBox-name'>
        <div className='imageBox-name'>
       <img className='image' src={imag} alt='img'/>
        </div>
        <div className='dataBox-name'>
           <h2 className='nameName'>{`${title} ${first} ${last}`}</h2>
           <p><span style={{color:"#A259FF"}}>{`${number}`}</span>{`,${area},${city},${state},`}<span style={{fontWeight:"bold"}}>
            {`${country}`}</span>{`,${postcode}`}<br/>
           {`${offset}-${description}`}
           <br/>
           {capitalizeFirstLetter(gender)}
           </p>

        </div>
    </div>
  )
}

export default NamePlate