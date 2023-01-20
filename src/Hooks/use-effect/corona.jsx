import React, { useState, useEffect } from 'react';

function CORONA_INFO() {
   const [country, setCountry] = useState("");
   const [data, setData] = useState("");

   useEffect(() => {
      if(country.length === 2){
         let timeClear = setTimeout(() => {
            fetch(`https://corona-api.com/countries/${country}`)
            .then(stream => stream.json())
            .then(result => setData(result.data));
         }, 2000);
         return () => clearTimeout(timeClear); //* debounce example
      }
   }, [country]); //* <= if we wanna that useEffect work once we must put empty array here []

   return (
      <>
         <input type="text"
         value = {country}
         onChange = {(evn) => setCountry(evn.target.value)}
         placeholder="Enter country code"
         />
         {data?.name && <h3>{data.name}</h3>}
         {data?.population && <h3>{data?.name} population is {data.population}</h3>}
         {data?.latest_data?.confirmed && <p>Get infected <b>{data.latest_data.confirmed}</b> people </p>}
         
      </>
   )
}

export default CORONA_INFO;