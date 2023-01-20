import React, { useState } from 'react'
import App from '../../App';



const SearchForm = ({value, onSearch}) => {
   const [text, setText] = useState("");
   console.log(text);
   return (
      <form onSubmit={() => onSearch(text)}>
         <input type="text" 
                  value={text} 
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Search Git user"
         />
         <br />
         <br />
            <App />
      </form>
   )
}

export {
   SearchForm,
}
// export default memo(SearchForm);
