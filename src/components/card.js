import React from "react";

export default function Card(props){
    return(
        <div className="newCard">
            <img src={props.img} alt="" className="card-image"/>
            <p>{props.rating}  {props.reviewCount} .{props.country}</p>
            <p>{props.title}</p>
            <p>{props.price}</p>
        </div>
    )
}