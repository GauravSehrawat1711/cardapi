import React,{useState,useEffect} from 'react'
import Card from './Card';

const Data = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
       getdata(); 
    },[])
const getdata=async()=>{
   let result=await fetch('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020');
result= await result.json();

 setData(result.results)
 
 
}
  return (
    <div className='outerContainer'>
    <div className='innerContainer'>

        {
            data.map((item,i)=>
            <Card gender={item.gender} key={i} title={item.name.title} first={item.name.first} last={item.name.last} 
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
            />
            )
        }
        </div>
    </div>
  )
}

export default Data