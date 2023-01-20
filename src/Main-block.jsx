import './App.css';
import { COMPONENT_3 } from './Hooks/use-context/comp';
import Checkbox from './Hooks/use-effect/checkbox';
import Effect from './Hooks/use-effect/comp-effect';
import CORONA_INFO from './Hooks/use-effect/corona';
import Phrase from './Hooks/use-effect/create_phrase ';
import StarRating from './Hooks/use-state/StarRating';
import useAnyKeyToRender from './Hooks/use-effect/use-any-key-to-render ';
import React, { 
      useEffect,
      useMemo,
      useState,
      memo
} from 'react';
import Anyway from './Hooks/useMemo and useCallBack/anyway';
import UseWindowSize from './Hooks/use-layout-effect/window-size';
import User from './Hooks/use-reducer/users';
import MainMemo from './Hooks/memo/main-memo';
import GitHubUser from './Components/Git/gitUser';
import List from './Components/rend-props';
import Example from './Components/virtualized-list';
// import {SearchForm, } from './Components/search-form';
import SiteLayout from './Components/suspense/site-layout';
import ErrorBoundary from './Components/suspense/error-bundary';
import ErrorScreen from './Components/suspense/error-screen';
import BreakThings from './Components/suspense/fake-error';
import { Route, Routes } from 'react-router';



export const countryContext = React.createContext(); 

const tahoe_peaks = [{
  name: "Freel Peak",
  elevation: 10891
}, {
  name: "Monument Peak",
  elevation: 10067
}, {
  name: "Pyramid Peak",
  elevation: 9983
},
];
function Main() {
  const [login, ] = useState("azat-io");
  
  return (
    <>
    <Routes>
      <Route />
    </Routes>
      <StarRating />
      <h1 className='title-hooks'>Hooks</h1>
      <hr />
      <countryContext.Provider value="New-York">
        <h2>- useContext example </h2>
          <COMPONENT_3 />
      </countryContext.Provider>
      <h2>- useEffect example </h2>
      <Effect />
      ------------------------------------------------ <br />
      <CORONA_INFO />  <br />
      ------------------------------------------------ <br />
      <Checkbox />  <br />
      ------------------------------------------------ <br />
      <Phrase />   <br />
      {/* useAnyKeyToRender() */}
      <WordCount>You are not going to believe this but...</WordCount>
        <hr />
      <h2>Memo</h2>
      <Anyway  />
      --------------
      <MainMemo />
        <hr />
      <h2>useLayoutEffect</h2>
      <UseWindowSize />
      ------------------------------------------------ <br />
      <h2>useReducer</h2>
      <User />
      ------------------------------------------------ <br />
      <Checkbox />
        <hr />
      <h2> ГЛАВА 8 Включение данных </h2>
      {/* <SearchForm value= {login} onSearch={setLogin} /> */}
      <GitHubUser login={login}/>
      ------------------------------------------------ <br />
      <h2>Render-props</h2>
      <List 
        renderEmpty={<p>This list is empty</p>} 
        data={tahoe_peaks}
        renderItem={item => (
          <>
            {item.name} — {item.elevation.toLocaleString()}ft
          </>
        )} 
      />
      ------------------------------------------------ <br />
      <h2>virtualized list</h2>
      <Example />
      ------------------------------------------------ <br />
      <hr />
      <h2>Suspense</h2>
      <ErrorScreen />
      <SiteLayout 
      nav={
        <ErrorBoundary fallback={<ErrorScreen />}>
          <nav className="menu"> Menu   </nav>
          <BreakThings />
        </ErrorBoundary>
      }>      
        <>
          <h1>Contents</h1>        
          <p>This is the main part of the example layout</p>
        </>
      </SiteLayout> 

    </>
  );
}
function WordCount({children = ""}) {
  useAnyKeyToRender();
  
  console.log("WordCount rendered");

  const words = useMemo(() =>{
    const words = children.split(" ");
    return words;
  }, [children]);
  // const words = children.split(" ");
  useEffect(() => {
    console.log("fresh render");
  }, [words]);
  return ( 
    <> 
      <p> {children} </p>      
      <p> <strong>{words.length} — words</strong > </p>    
    </> 
  );
}


export default memo(Main);
