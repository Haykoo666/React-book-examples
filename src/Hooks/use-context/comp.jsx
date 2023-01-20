import React from 'react';
import {useContext} from 'react';
import {countryContext} from "../../Main-block"


function COMPONENT_3() {
   // const value = useContext(countryContext);
   // return <div> Hello {value} </div>
   return <COMPONENT_2 />;
}

function COMPONENT_2() {
   return <COMPONENT_1 />
}

function COMPONENT_1() {
   const value = useContext(countryContext);
   return <div> Hello {value} </div>
}

export{
   COMPONENT_1,
   COMPONENT_2,
   COMPONENT_3,
}