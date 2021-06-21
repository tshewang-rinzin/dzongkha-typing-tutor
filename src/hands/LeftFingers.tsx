import React from 'react';
import Image from 'react-bootstrap/Image';

import { LeftImageFile } from "./HandsHelper";

export default function LeftFingers(props) {

    let character = props.character;
    const fingerImageName = LeftImageFile(character);
    return (
        <>
        {fingerImageName &&
            <Image src={fingerImageName} className="left-hand">
            </Image>
        }
        </>
    )
};