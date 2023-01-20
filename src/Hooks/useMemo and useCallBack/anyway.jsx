import React, { useState,useCallback, useMemo } from 'react'
import VideoPlayer from './videoPLayer';

function Anyway() {
   const [text, setText] = useState("");
   const [isPlaying, setIsPlaying] = useState(false);

   const onPlay = useCallback(() => {
      setIsPlaying(true);
   }, []);
   const onPause = useCallback(() => {
      setIsPlaying(false);
   }, []);
   const videoPlayerData = useMemo(() =>{
      return {title:"Bony movie", url: "https://www.w3schools.com/html/mov_bbb.mp4"} 
   }, [] )
   return (
      <div>
         <p>{text} ----- and ----- {text.length} </p>
         <input 
            type = {text}
            value = {text}
            onChange = {(e) => setText(e.target.value)}
            />
      <p style={{textAlign: "center"}}>Video is {`${isPlaying ? "playing" : "pausing"}`}</p>      
      <VideoPlayer src = { videoPlayerData } // {title:"Bony movie", url: "https://www.w3schools.com/html/mov_bbb.mp4"}
         onPlay={onPlay}
         onPause={onPause}
      />

      </div>
   )
}

export default Anyway