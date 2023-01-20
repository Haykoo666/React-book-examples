import React, { useState } from "react";
import { useEffect } from "react";

function Checkbox() {  
   const [checked, setChecked] = useState(false);
   console.log(`Outside useEffect: checked: ${checked.toString()}`);
   useEffect(() => {
      console.log(`Inside useEffect: checked: ${checked.toString()}`);
   });
   

   return (    
      <label>      
         <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)}  />          
         {checked ? "checked" : "not checked"}   
      </label>  
   ); 
};
export default Checkbox