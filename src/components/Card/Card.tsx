import React from "react";
import "./Card.css";
import {Monster} from "../../App";

type CardProps = {
    monster: Monster;
}

export const Card = ({monster} : CardProps) => {
    return <div  className={"card-container"}>
        <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt="Monster"/>
        <h2>{monster.name}</h2>
        <p>{monster.email}</p>
    </div>
}
