import React from 'react';
import { useState } from 'react';
import { FaStar } from "react-icons/fa";
import "./style.css"


const createArray = length => [...Array(length)];

const Star = ({ selected = false,  onSelect = f => f  }) => (  <FaStar color={selected ? "red" : "grey"}  onClick={onSelect} /> );

function StarRating({ totalStars = 5 }) {  
   const [selectedStars, setselectedStars] = useState(0);  
      return (    
         <div className='box' style = {{border: "4px dashed lightcoral",padding: "20px"}}>      
            {createArray(totalStars).map((n, i) => ( 
               <Star 
                  key={i} 
                  selected={selectedStars > i}
                  onSelect={() => setselectedStars(i + 1)} 
               /> 
            ))}
            <br />
            <button type="submit" className='btn'>Rate</button>      
            <h3> {selectedStars} of {totalStars} stars </h3>    
         </div> 
      ); 
}

export default StarRating;
