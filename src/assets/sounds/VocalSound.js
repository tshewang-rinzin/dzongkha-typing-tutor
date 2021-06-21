import React, { useRef, useState, Suspense, useEffect } from "react";

import startSound from './assets/sounds/start.mp3';
//import ka from "./vocals/ka.mp3";

import useSound from 'use-sound';
import ka from './assets/sounds/vocals/ka.mp3';
import kha from './assets/sounds/vocals/kha.mp3';
import ga from './assets/sounds/vocals/ga.mp3';
import nga from './assets/sounds/vocals/nga.mp3';
import ca from "./assets/sounds/vocals/ca.mp3";
import cha from "./assets/sounds/vocals/cha.mp3";
import ja from "./assets/sounds/vocals/ja.mp3";
import nya from "./assets/sounds/vocals/nya.mp3";
import ta from "./assets/sounds/vocals/ta.mp3";
import tha from "./assets/sounds/vocals/tha.mp3";
import da from "./assets/sounds/vocals/da.mp3";
import na from "./assets/sounds/vocals/na.mp3";
import pa from "./assets/sounds/vocals/pa.mp3";
import pha from "./assets/sounds/vocals/pha.mp3";
import ba from "./assets/sounds/vocals/ba.mp3";
import ma from "./assets/sounds/vocals/ma.mp3";
import tsa from "./assets/sounds/vocals/tsa.mp3";
import tsha from "./assets/sounds/vocals/tsha.mp3";
import dza from "./assets/sounds/vocals/dza.mp3";
import zha from "./assets/sounds/vocals/zha.mp3";
import za from "./assets/sounds/vocals/za.mp3";
import a from "./assets/sounds/vocals/a.mp3";
import ya from "./assets/sounds/vocals/ya.mp3";
import ra from "./assets/sounds/vocals/ra.mp3";
import la from "./assets/sounds/vocals/la.mp3";
import sha from "./assets/sounds/vocals/sha.mp3";
import sa from "./assets/sounds/vocals/sa.mp3";
import ha from "./assets/sounds/vocals/ha.mp3";
import ah from "./assets/sounds/vocals/ah.mp3";
import one from "./assets/sounds/vocals/one.mp3";
import two from "./assets/sounds/vocals/two.mp3";
import three from "./assets/sounds/vocals/three.mp3";
import four from "./assets/sounds/vocals/four.mp3";
import five from "./assets/sounds/vocals/five.mp3";
import six from "./assets/sounds/vocals/six.mp3";
import seven from "./assets/sounds/vocals/seven.mp3";
import eight from "./assets/sounds/vocals/eight.mp3";
import nine from "./assets/sounds/vocals/nine.mp3";
import zero from "./assets/sounds/vocals/zero.mp3";
import wa from "./assets/sounds/vocals/wa.mp3";
import correct from "./assets/sounds/keystroke.wav";

const soundMap = {
        "\u0f40": ka,
        "\u0f41": kha,
        "\u0f42": ga,
        "\u0f44": nga,
        "\u0f45": ca,
        "\u0f46": cha,
        "\u0f47": ja,
        "\u0f49": nya,
        "\u0f4f": ta,
        "\u0f50": tha,
        "\u0f51": da,
        "\u0f53": na,
        "\u0f54": pa,
        "\u0f55": pha,
        "\u0f56": ba,
        "\u0f58": ma,
        "\u0f59": tsa,
        "\u0f5a": tsha,
        "\u0f5b": dza,
        "\u0f5e": zha,
        "\u0f5f": za,
        "\u0f60": a,
        "\u0f61": ya,
        "\u0f62": ra,
        "\u0f63": la,
        "\u0f64": sha,
        "\u0f66": sa,
        "\u0f67": ha,
        "\u0f68": ah,
        "\u0f21": one,
        "\u0f22": two,
        "\u0f23": three,
        "\u0f24": four,
        "\u0f25": five,
        "\u0f26": six,
        "\u0f27": seven,
        "\u0f28": eight,
        "\u0f29": nine,
        "\u0f20": zero,
        "\u0f5d": wa
    }

export function vocalSound(char, keystatus){

    if(localStorage.getItem('playvoice') == 1){
        if(soundMap.hasOwnProperty(char)){
            return soundMap[char];
        }
        else{
            return correct;
        }
    }
    else{
        return correct;
    }

  }

