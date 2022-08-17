import React from "react";

export default function Joke(props){
    
    return(
        <div>
            <h2>{props.setup}</h2>
            <h3>{props.punchline}</h3>
            <hr/>
        </div>
    )
}