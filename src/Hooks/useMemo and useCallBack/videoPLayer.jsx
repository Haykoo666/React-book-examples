import React, { useRef, memo  } from "react";
import "../../App.css"

function VideoPlayer({src, onPlay, onPause}) {
   const videoRef = useRef();
   const countRef = useRef(0);
   countRef.current++

   return (
      <div className="video-player">
         <h3 style={{textAlign: "center"}}>{src.title}</h3>
         <p>Call count is {countRef.current}</p>
         <video src={src.url} width="300px" ref={videoRef}/>
         <button className="play-btn" onClick={() => {
            videoRef.current.play();
            onPlay()
         }}>Play</button>
         <button className="pause-btn" onClick={() => {
            videoRef.current.pause();
            onPause();
         }}>Pause</button>

      </div>
   ) }
//? V.2   
// }, (prevProps, nextProps) => {
//    console.log(`
//    `);
//    console.log(prevProps);
//    console.log(nextProps);
//    console.log( JSON.stringify(prevProps) === JSON.stringify(nextProps))
//    console.log( prevProps === nextProps)
//    return JSON.stringify(prevProps) === JSON.stringify(nextProps)
//    // return prevProps === nextProps
// }
export default memo(VideoPlayer);