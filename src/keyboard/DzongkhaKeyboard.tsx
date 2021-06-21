import React, { useState, useEffect, useRef } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

import dzKeyboardLayout from "./layouts/dzongkha";
import enKeyboardLayout from "./layouts/english";
import KeyHighlighter, { keyHighlighter } from "../utils/KeyHighlighter";

import '../assets/scss/keyboard.scss';
import useKeyPress from '../hooks/useKeyPress';
//import VocalSound from '../sounds/VocalSound';
import useSound from 'use-sound';
import boopSfx from '../sounds/vocals/a.mp3';

export default function DzongkhaKeyboard(props) {

    //const play = VocalSound();

    // const [play, { stop, isPlaying}] = useSound(boopSfx);
    let keyboardLayout = props.keyboardLayout;
    let incomingChar = props.incomingChar;
    let showKeyboardToggle = props.showKeyboard;
    let colorToggle = props.keyboardTheme;

    const [showKeyboard, setShowKeyboard] = useState(true);

    const [dzLayout, setDzLayout] = useState(keyboardLayout);
    const [enLayout, setEnLayout] = useState("default");
    const keyboard = useRef();
    const keyboard2 = useRef();
    const [keyboardColorToggle, setKeyboardColorToggle] = useState(colorToggle);
    const [keyboardColorToggleClass, setKeyboardColorToggleClass]= useState("hg-theme-default hg-layout-default");





    let classes = `dzkeyboard ${props.className}`;

    // if(colorToggle){
    //     setKeyboardColorToggleClass("hg-theme-default hg-layout-default myTheme");
    // }
    // else{
    //     setKeyboardColorToggleClass("hg-theme-default hg-layout-default");
    // }

    // console.log(keyboard.getButtonElement('a'));

    const englishKeyboard = (selectedLayout) => {


        if(selectedLayout == "default"){
            classes="dzkeyboard";
            return (
                <div className="enkeyboard">
                    <Keyboard
                        baseClass="en-keyboard"
                        theme={"hg-theme-default hg-layout-default myTheme"}
                        layout={enKeyboardLayout}
                        buttonTheme={[
                            {
                                class: "hg-text-hide",
                                button: "{shift}"
                            }
                        ]}
                        mergeDisplay={true}
                        display={{
                            "{rshift}": "shift",
                            "{lshift}": "shift",
                            "{ctrl}": "Ctrl",
                            "{alt}": "Alt",
                            "{altgr}": "AltGr"
                        }}
                    />
                </div>
            )
        }
        else{
            classes="dzkeyboard noenglish";
            //setDzKeyboardNoEnglishClass("noenglish");
        }

    }

    // let currentCharacter = props.incomingChar;

    let currentCharacter = keyHighlighter(props.incomingChar);
    let themeClass = (localStorage.getItem('keyboardcolor') == 0) ? "hg-theme-default hg-layout-default":"hg-theme-default hg-layout-default myTheme";


    return (
        <>
            <div className="keyboardContainer">
                {englishKeyboard(keyboardLayout)}

                <div className={classes}>
                    <Keyboard
                        baseClass="dz-keyboard"
                        keyboardRef={r => (keyboard.current = r)}
                        layoutName={keyboardLayout}
                        layout={dzKeyboardLayout}
                        mergeDisplay={true}
                        display={{
                            "{rshift}": "shift",
                            "{lshift}": "shift",
                            "{ctrl}": "Ctrl",
                            "{alt}": "Alt",
                            "{altgr}": "AltGr"
                        }}
                        theme={themeClass}
                        buttonTheme={[
                            {
                                class: "hg-left-pinky",
                                buttons: "{tab} {lock} \u0f09 \u0f21 \u0f40 \u0f4f \u0f5e \u0f0a \u0f04 \u0f90 \u0f9f \u0fae \u0fd1 \u0031 \u0f88 \u0f4a \u0f13 \u0fd0 \u0fd3 \u0f8d \u0f9a \u0f36 {lshift}"
                            },
                            {
                                class: "hg-left-ring",
                                buttons: "\u0f22 \u0f41 \u0f50 \u0f5f \u0f05 \u0f91 \u0fa0 \u0faf \u0032 \u0f89 \u0f4b \u0fbe \u0fd4 \u0f8e \u0f9b \u0fbf"
                            },
                            {
                                class: "hg-left-middle",
                                buttons: "\u0f23 \u0f42 \u0f51 \u0f60 \u0f06 \u0f92 \u0fa1 \u0f71 \u0033 \u0f8c \u0f4c \u0f03 \u0f3a \u0f8f \u0f9c \u0fb0"
                            },
                            {
                                class: "hg-left-index",
                                buttons: "\u0f24 \u0f25 \u0f44 \u0f53 \u0f61 \u0f26 \u0f72 \u0f54 \u0f62 \u0f0e \u0f94 \u0fa3 \u0fb1 \u0f80 \u0fb2 \u0034 \u0035 \u0f83 \u0f1a \u0f4e \u0f0f \u0f6a \u0f3b \u0f85 \u0f01 \u0f82 \u0f8b+0f99 \u0f9e \u0fbb \u0fbc \u0fa4"
                            },
                            {
                                class: "hg-right-index",
                                buttons: "\u0f26 \u0f27 \u0f74 \u0f7a \u0f55 \u0f56 \u0f63 \u0f64 \u0f08 \u0f38 \u0f7b \u0f84 \u0fb4 \u0fb3 \u0036 \u0037 \u0f1b \u0f1c \u0f37 \u0f12 \u0f65 \u0f8a \u002a \u0f35 \u0fb5 \u0fa5 \u0fa6"
                            },
                            {
                                class: "hg-right-middle",
                                buttons: "\u0f28 \u0f7c \u0f58 \u0f66 \u0f34 \u0f7d \u0fa8 \u0fb6 \u0038 \u0f1d \u0f7e \u002c \u0f17 \u0f87 \u0fd9"
                            },
                            {
                                class: "hg-right-ring",
                                buttons: "\u0f29 \u0f45 \u0f59 \u0f67 \u0f3c \u0f95 \u0fa9 \u0fb7 \u0039 \u0f1e \u0f39 \u002e \u0f18 \u0f86 \u0fda"
                            },
                            {
                                class: "hg-right-pinky",
                                buttons: "\u0f5d \u0f0d \u0f14 \u0f20 \u0f46 \u0f47 \u0f49 \u0f5b \u0f5a \u0f68 \u0f5d \u0f0d \u0f14 \u0f20 \u0f3d \u0f7f \u0f11 \u0fad \u0f99 \u0f96 \u0f97 \u0faa \u0fab \u0fb8 \u0030 \u002d \u003d \u005c \u0f1f \u0028 \u0029 \u003b \u0327 \u002f \u0fd2 \u002b \u0fba \u0f19 \u0f3f \u0f3e \u003a \u0022 \u003f {rshift} {bksp} {enter}"
                            },
                            {
                                class: "hg-thumb",
                                buttons: "\u0020 \u0f0b \u00a0 \u0f0c "
                            },
                            {
                                class: "hg-background",
                                buttons: currentCharacter
                            }
                        ]}
                        physicalKeyboardHighlightTextColor="white"
                    />
                </div>
            </div>
        </>
    );
}
