// import React, { useState, useEffect } from "react";
// import { useFetch } from '../Hooks/Custom Hook/hook-fetch';
import Fetch from '../comp-fetch';
import RepoMenu from './repo-menu';
// import UserRepositories from './user-repo';


// const loadJSON = key =>  key && JSON.parse(localStorage.getItem(key)); 
// const saveJSON = (key, data) =>  localStorage.setItem(key, JSON.stringify(data));

// function GitHubUser({ login }) { 
//    const [data, setData] = useState(loadJSON(`user:${login}`));
//    const [error, ] = useState();  
//    const [loading, setLoading] = useState(false);

//    useEffect(() => {    
//       if (!data) return;    
//       // if (data.login === login) return;  
//       const {name, avatar_url, location} = data;
//       saveJSON(`user:${login}`, {
//          name,
//          login,
//          avatar_url,
//          location
//       }); 
//    // eslint-disable-next-line react-hooks/exhaustive-deps
//    }, [data]);

//    useEffect(() => {
//       if(!login) return;
//       if(data && data.login === login) return;
//       setLoading(true);
//       fetch(`https://api.github.com/users/${login}`)      
//       .then(response => response.json())      
//       .then(setData)      
//       .catch(console.error)
//       .finally(()=> setLoading(false) )  
//    // eslint-disable-next-line react-hooks/exhaustive-deps
//    }, [login])
   
//    if(loading) return <h2>Loading...</h2>
//    if (error) {
//       return <pre>{JSON.stringify(error, null, 6)}</pre>
//    }
//    if (!data) return null;

//       return (
//          <> 
//             <div className="github">
//                {/* <form onSubmit={}>
//                   <input type="text" placeholder="Search git user" />
//                </form> */}
//                <img src={data.avatar_url} alt="avatar" />
//                <div>
//                   <h2>{data.login}</h2>
//                   {data.name && <p>{data.name}</p>}
//                   {data.location && <p>{data.location}</p>}
//                </div>
//                <button onClick={() => {
//                   // setNewData(localStorage.clear());
//                   console.log("clear");
//                }}>Clear info</button>
//             </div>
//          </>
//       );

// }

// export default GitHubUser;

//? V.2

// function GitHubUser({ login }) {
//    const { loading, data, error } = useFetch(`https://api.github.com/users/${login}`);

//    if (loading) return <h1>loading...</h1>;  
//    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
//    return (
//       <div className="githubUser">      
//       <img src={data.avatar_url}
//             alt={data.login}        
//             style={{ width: 200 }} />
//          <div>
//             <h1>{data.login}</h1>
//             {data.name && <p>{data.name}</p>}
//             {data.location && <p>{data.location}</p>}      
//          </div>
//       </div>  
//    );
// }
// export default GitHubUser;

//? V.3

function GitHubUser({ login }) {
   return (    
      <Fetch 
         uri={`https://api.github.com/users/${login}`}       
         renderSuccess={UserDetails} 
      />  
   ); 
}

function UserDetails({ data }) {
   return (    
      <div className="githubUser">
         <img src={data.avatar_url}
               alt={data.login}
               style={{ width: 200, borderRadius: "50%" }}
         /> 
         <div>
            <h1>{data.login}</h1> 
            {data.name && <p>{data.name}</p>}
            {data.location && <p>{data.location}</p>}
         </div>  
         {/* <UserRepositories 
            login={data.login}
            onSelect={repoName => console.log(`${repoName} selected`)}
            
         />  */}
         <Fetch  uri={`https://api.github.com/users/${data.login}/repos`}  
         renderSuccess={({ data }) => (    
         <RepoMenu 
            repositories={data} 
            onSelect={repoName => console.log(`${repoName} selected`)} 
         />  )} 
         />
      </div>  
   ); 
}

export default GitHubUser;