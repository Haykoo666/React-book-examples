import React, { useState, useEffect } from "react";

function Phrase() {
   const [val, setVal] = useState("");
   const [phrase, setPhrase] = useState("example phrase");
   const createPhrase = () => { 
      setPhrase(val);    
      setVal("");  
   };
   useEffect(() => {    
      let timerID = setTimeout(() => {
         console.log(`typing "${val}"`);
      }, 1600);
      return () => {
         clearTimeout(timerID)
      }
   }, [val]);

   useEffect(() => {   
      let timerID = setTimeout(() => {
         console.log(`saved phrase: "${phrase}"`);  
      }, 1600);
      return () => {
         clearTimeout(timerID)
      }
   },[phrase]);

   useEffect(() => {  
      console.log("If val || phrase changed worked this useEffect"); 
   }, [val, phrase]);

   useEffect(() => { 
      console.log("only once after initial render"); 
   }, []);


   return (   
      <>  
         <label>Favorite phrase:</label>      
         <input        
            value={val}        
            placeholder={phrase}        
            onChange={e => setVal(e.target.value)}
         />    <br />  
         <button onClick={createPhrase}>send</button>    
      </>  
   ); 
}
export default Phrase;