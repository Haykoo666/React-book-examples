import React from "react";



// function Rend_Prop() {
//    return (    
//    <ul> {
//       tahoe_peaks.map((peak, i) => ( 
//       <li key={i}> {peak.name} — {peak.elevation.toLocaleString()}ft
//       </li> ))}    
//       </ul>  
//    ); 
// }
function List({data = [], renderEmpty, renderItem}) {
   return !data.length ? (
      renderEmpty
   ) : (
      
         <ul>
            {
               data.map((item, i) => 
                  <li key={i}>{renderItem(item)}</li>
               )
            }
         </ul>
   )

}
export default List;


