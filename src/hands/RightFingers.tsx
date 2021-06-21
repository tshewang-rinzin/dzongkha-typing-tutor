
import React from 'react';
import Image from 'react-bootstrap/Image';

import { RightImageFile } from "./HandsHelper";


export default function RightFingers(props) {

    let character = props.character;

    const fingerImageName = RightImageFile(character);

    return (
        <>
        {fingerImageName &&
            <Image src={fingerImageName} className="right-hand">
            </Image>
        }
        </>
    )
};