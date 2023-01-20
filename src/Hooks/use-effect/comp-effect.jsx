import React, { useEffect, useState  } from 'react';

function Effect() {
   const [title, setTitle] = useState("");
   useEffect(() => {
      document.title = title;
   
   }, [title])
   
   return (
      <div>
         <h3>You change page title to this =&gt; {title} </h3>
         <input 
         type="text" 
         placeholder='Change page title'
         value={title}
         onChange={evn => setTitle(evn.target.value)}
         />
      </div>
   )
}
export default Effect;