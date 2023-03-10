import {useState, useCallback, useEffect} from 'react';
import ReactMarkdown from "react-markdown";


const  RepositoryReadme = ({repo, login}) => {
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState();
   const [markdown, setMarkdown] = useState("");

   const loadReadme = useCallback(async (login, repo) => {    
      setLoading(true);
      const uri = `https://api.github.com/repos/${login}/${repo}/readme`;    
      const { download_url } = await fetch(uri)
      .then(res => res.json() );   
      
      const markdown = await fetch(download_url)
         .then(res => res.text());
         setMarkdown(markdown);
         setLoading(false);  
   }, []);

   useEffect(() => {
      if (!repo || !login) return;
      loadReadme(login, repo)
      .catch(setError);  
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [repo]);

   if (error)    return <pre>{JSON.stringify(error, null, 2)}</pre>;  
   if (loading) return <p>Loading...</p>;
   return <ReactMarkdown children={markdown} />; 

}

export default  RepositoryReadme;