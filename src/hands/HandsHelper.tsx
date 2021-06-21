//returns string of keys
import keygroups from "./keygroups.json";
import keymaps from "./keymaps.json";

import leftHand from "../assets/img/hands/left-hand.png";
import leftPinky from "../assets/img/hands/left-pinky.png";
import leftRing from "../assets/img/hands/left-ring.png";
import leftMiddle from "../assets/img/hands/left-middle.png";
import leftIndex from "../assets/img/hands/left-index.png";
import leftThumb from "../assets/img/hands/left-thumb.png";
import shiftLeft from "../assets/img/hands/shift-left.png";

import rightHand from "../assets/img/hands/right-hand.png";
import rightPinky from "../assets/img/hands/right-pinky.png";
import rightRing from "../assets/img/hands/right-ring.png";
import rightMiddle from "../assets/img/hands/right-middle.png";
import rightIndex from "../assets/img/hands/right-index.png";
import rightThumb from "../assets/img/hands/right-thumb.png";
import shiftRight from "../assets/img/hands/shift-right.png";

import altRightPinky from "../assets/img/hands/alt-shift-right-pinky.png";
import altRightRing from "../assets/img/hands/alt-shift-right-ring.png";
import altRightMiddle from "../assets/img/hands/alt-shift-right-middle.png";
import altRightIndex from "../assets/img/hands/alt-shift-right-index.png";


import altShiftRightPinky from "../assets/img/hands/alt-shift-right-pinky.png";
import altShiftRightRing from "../assets/img/hands/alt-shift-right-ring.png";
import altShiftRightMiddle from "../assets/img/hands/alt-shift-right-middle.png";
import altShiftRightIndex from "../assets/img/hands/alt-shift-right-index.png";



export const keyboardLayoutSelector = (character) => {

    
    const normalkeys = keygroups.normalkeys;
    const shiftkeys = keygroups.shiftkeys;
    const altkeys = keygroups.altkeys;
    const altshiftkeys = keygroups.altshiftkeys;

    let keyboardstatus = null;

    for(var i=0; i<normalkeys.length; i++){
        if(character === normalkeys[i]){
            keyboardstatus = "normalkeys";
            break;
        }
        else{
            continue;
        }
    }  
    if(keyboardstatus == null){
        for(let i=0; i<shiftkeys.length; i++){
            if(character === shiftkeys[i]){
                keyboardstatus = "shiftkeys";
                break;
            }
            else{
                continue;
            }
        }
    }

    if(keyboardstatus == null){
        for(let i=0; i<altkeys.length; i++){
            if(character === altkeys[i]){
                keyboardstatus = "altkeys";
                break;
            }
            else{
                continue;
            }
        }
    }
    if(keyboardstatus == null){
        for(let i=0; i<altshiftkeys.length; i++){
            if(character === altkeys[i]){
                return "altshiftkeys";
            }
            else{
                continue;
            }
        }
    }
    return keyboardstatus;
};

// export const LeftRightSelection = (character) => {
//     const rightkeys = keygroups.rightkeys;
//     // const leftkeys = keygroups.leftkeys;

//     var keygroup = "left";

//     for(let i=0; i<rightkeys.length; i++){
//         if(character === rightkeys[i]){
//             keygroup = "right";
//             break;
//         }
//         else{
//             continue;
//         }
//     }
//     return keygroup;
// };

export const LeftImageFile = (character) => {

    const keyboardlayout =  keyboardLayoutSelector(character);
    let imageFilename = leftHand;

    if(keyboardlayout != null){
        const little = keymaps[keyboardlayout].left.little;
        const ring = keymaps[keyboardlayout].left.ring;
        const middle = keymaps[keyboardlayout].left.middle;
        const index = keymaps[keyboardlayout].left.index;
        const thumb = keymaps[keyboardlayout].left.thumb;

        switch(keyboardlayout){
            case "normalkeys":
                if(little.includes(character)){
                    imageFilename = leftPinky;
                }
                if(ring.includes(character)){
                    imageFilename = leftRing;
                }
                if(middle.includes(character)){
                    imageFilename = leftMiddle;
                }
                if(index.includes(character)){
                    imageFilename = leftIndex;
                }
                if(thumb.includes(character)){
                    imageFilename = leftThumb;
                }
            break;
            case "shiftkeys":
                if(little.includes(character)){
                    imageFilename = leftPinky;
                }
                else if(ring.includes(character)){
                    imageFilename = leftRing;
                }
                else if(middle.includes(character)){
                    imageFilename = leftMiddle;
                }
                else if(index.includes(character)){
                    imageFilename = leftIndex;
                }
                else if(thumb.includes(character)){
                    imageFilename = leftThumb;
                }
                else{
                    imageFilename = shiftLeft;
                }
            break;
            case "altkeys":
                if(little.includes(character)){
                    imageFilename = leftPinky;
                }
                else if(ring.includes(character)){
                    imageFilename = leftRing;
                }
                else if(middle.includes(character)){
                    imageFilename = leftMiddle;
                }
                else if(index.includes(character)){
                    imageFilename = leftIndex;
                }
                else if(thumb.includes(character)){
                    imageFilename = leftThumb;
                }
            break;

            case "altshiftkeys":
                if(little.includes(character)){
                    imageFilename = leftPinky;
                }
                else if(ring.includes(character)){
                    imageFilename = leftRing;
                }
                else if(middle.includes(character)){
                    imageFilename = leftMiddle;
                }
                else if(index.includes(character)){
                    imageFilename = leftIndex;
                }
                else if(thumb.includes(character)){
                    imageFilename = leftThumb;
                }
                break;
            default:
                imageFilename = leftHand;
                break;
        }
    }
    return imageFilename;
};

export const RightImageFile = (character) => {

    const keyboardlayout =  keyboardLayoutSelector(character);

    let imageFilename = rightHand;

    if(keyboardlayout != null){
        const little = keymaps[keyboardlayout].right.little;
        const ring = keymaps[keyboardlayout].right.ring;
        const middle = keymaps[keyboardlayout].right.middle;
        const index = keymaps[keyboardlayout].right.index;
        const thumb = keymaps[keyboardlayout].right.thumb;


        switch(keyboardlayout){
            case "normalkeys":
                if(little.includes(character)){
                    imageFilename = rightPinky;
                }
                if(ring.includes(character)){
                    imageFilename = rightRing;
                }
                if(middle.includes(character)){
                    imageFilename = rightMiddle;
                }
                if(index.includes(character)){
                    imageFilename = rightIndex;
                }
                if(thumb.includes(character)){
                    imageFilename = rightThumb;
                }
            break;
            case "shiftkeys":
                if(little.includes(character)){
                    imageFilename = rightPinky;
                }
                else if(ring.includes(character)){
                    imageFilename = rightRing;
                }
                else if(middle.includes(character)){
                    imageFilename = rightMiddle;
                }
                else if(index.includes(character)){
                    imageFilename = rightIndex;
                }
                else if(thumb.includes(character)){
                    imageFilename = rightThumb;
                }
                else{
                    imageFilename = shiftRight;
                }
            break;
            case "altkeys":
                if(little.includes(character)){
                    imageFilename = altRightPinky;
                }
                else if(ring.includes(character)){
                    imageFilename = altRightRing;
                }
                else if(middle.includes(character)){
                    imageFilename = altRightMiddle;
                }
                else if(index.includes(character)){
                    imageFilename = altRightIndex;
                }
                else if(thumb.includes(character)){
                    imageFilename = rightThumb;
                }
                
            break;
            case "altshiftkeys":
                if(little.includes(character)){
                    imageFilename = altShiftRightPinky;
                }
                else if(ring.includes(character)){
                    imageFilename = altShiftRightRing;
                }
                else if(middle.includes(character)){
                    imageFilename = altShiftRightMiddle;
                }
                else if(index.includes(character)){
                    imageFilename = altShiftRightIndex;
                }
                else if(thumb.includes(character)){
                    imageFilename = rightThumb;
                }
                break;
            default:
                break;
        }
    }
    return imageFilename;
};