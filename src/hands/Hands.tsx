import React, { useState, useEffect, useRef } from 'react';
import Image from 'react-bootstrap/Image';

import "../assets/scss/hands.scss";

import LeftFingers from './LeftFingers';
import RightFingers from './RightFingers';



export default function Hands(props) {



    const [character, setCharacter] = useState("");

    return (
        <>
        <div className="hands-container">
            <LeftFingers character={props.character} />
            <RightFingers character={props.character} />
        </div>
        </>
    )
};