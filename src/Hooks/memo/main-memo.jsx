import React, { useState } from "react";
import PureCat from "./cat";


function MainMemo() {
   const [cats, setCats] = useState(["Biscuit", "Jungle", "Outlaw"]);
   return ( 
      <> 
         {
            cats.map((name, i) => ( 
               <PureCat key = {i} name = {name} meow = {name => console.log(`${name} has meowed )))`)} /> 
            ))
         }      
            <button onClick={() => setCats([...cats, prompt("Name a cat")])}> Add a Cat </button > 
      </>  
   );
}
export default MainMemo