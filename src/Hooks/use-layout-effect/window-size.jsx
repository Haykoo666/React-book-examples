import React, { useLayoutEffect, useState, useEffect } from "react";


function UseWindowSize (){
   const [width, setWidth] = useState(0);
   const [height, setHeight] = useState(0);
   const resize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
   };
   useEffect(() => {
      window.addEventListener("resize", resize);
      resize();
      return () => window.removeEventListener("resize", resize);
   }, []);
   
   useLayoutEffect(() => {
      console.log("useLayoutEffect worked before render");
   }, [])
   return(
      <>
         <div>Window Width: {width}</div>
         <div>Window Height: {height}</div>
      </>
   )
};
export default UseWindowSize;
