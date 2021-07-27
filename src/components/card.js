import React from 'react';
import BinImage from "../assets/bin.png";


const Card = (props) => (
    <div className="card">
        <img onClick={props.add} className="ingredientImg" src={props.img} alt={props.ingredient}/>
        <div className="ingredient">{props.ingredient}</div>
        <img className="remove" src={BinImage} alt="bin"/>
        <div className="amount">X {props.amount}</div>
    </div>
);

export default Card;