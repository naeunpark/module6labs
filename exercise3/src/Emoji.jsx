import { useState } from "react"

export function Emoji(){
    let [mood, setMood] = useState("😃");

    function handleMood(emoji){
        (emoji == "😃") ? setMood("🤪 ") : setMood("😃");
    }
    return (
        <>
        <h1>{mood}</h1>
        <button onClick={()=>handleMood(mood)} >Change Mood</button>
        </>
    )
}