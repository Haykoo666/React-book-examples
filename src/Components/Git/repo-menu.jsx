import { useEffect } from 'react';
import { useIterator } from '../../Hooks/Custom Hook/hook-iterator';
import RepositoryReadme from './repo-readme';

function RepoMenu({
   repositories,
   login,
   onSelect = f => f
}) 
{
   const [{name}, previous, next] = useIterator(repositories);
   useEffect(() => {
      if (!name) return;
      onSelect(name);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [name]);
   
   return ( 
   <>
      <div style = {{display: "flex", margin: "10px"}} className="git--repo--controller">
         <button onClick = {previous}> &lt; </button>      
         <p>{name}</p > 
         <button onClick = {next}> &gt; </button>    
      </div> 
      <RepositoryReadme login={login} repo={name} /> 
   </>
   );
}

export default RepoMenu;