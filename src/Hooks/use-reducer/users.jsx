import React, { useReducer} from "react";


const firstUser = {
   id: "0391-3233-3201",
   firstName: "Bill",
   lastName: "Wilson",
   city: "Missoula",
   state: "Montana",
   email: "bwilson@mtnwilsons.com",
   admin: false
};

function User() {
   // const [user, setUser] = useState(firstUser);
   const [user, setUser] = useReducer(  (user, newDetails) => ({ ...user, ...newDetails }),    firstUser  ); 
   return ( 
   <div> 
      <p> {user.firstName} {user.lastName} — <b>{ user.admin ? "Admin" : "User"}</b> </p> 
      <p> Email: {user.email} </p>      
      <p> Location: {user.city}, {user.state} </p> 
      <button 
         onClick={() => setUser({admin: true})}
      > Make Admin </button>    
      </div> 
   );
}

export default User;