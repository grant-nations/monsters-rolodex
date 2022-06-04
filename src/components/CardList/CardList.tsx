import React from "react";
import "./CardList.css"
import {Card} from "../Card/Card"
import {Monster} from "../../App";

type CardListProps = {
    monsters : Monster[];
}

export  const CardList = ({monsters} : CardListProps) => {
    return <div className={'card-list'}>
        {monsters.map(monster =>
            <Card
                key={monster.id}
                monster={monster}
            />)}
    </div>
}
