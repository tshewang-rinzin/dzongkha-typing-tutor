import React, { useRef, useState, Suspense, useEffect } from "react";

import startSound from '../sounds/start.mp3';
//import ka from "./vocals/ka.mp3";

import useSound from 'use-sound';

import ka from './vocals/ka.mp3';
import kha from './vocals/kha.mp3';
import ga from './vocals/ga.mp3';
import nga from './vocals/nga.mp3';
import ca from "./vocals/ca.mp3";
import cha from "./vocals/cha.mp3";
import ja from "./vocals/ja.mp3";
import nya from "./vocals/nya.mp3";
import ta from "./vocals/ta.mp3";
import tha from "./vocals/tha.mp3";
import da from "./vocals/da.mp3";
import na from "./vocals/na.mp3";
import pa from "./vocals/pa.mp3";
import pha from "./vocals/pha.mp3";
import ba from "./vocals/ba.mp3";
import ma from "./vocals/ma.mp3";
import tsa from "./vocals/tsa.mp3";
import tsha from "./vocals/tsha.mp3";
import dza from "./vocals/dza.mp3";
import zha from "./vocals/zha.mp3";
import za from "./vocals/za.mp3";
import a from "./vocals/a.mp3";
import ya from "./vocals/ya.mp3";
import ra from "./vocals/ra.mp3";
import la from "./vocals/la.mp3";
import sha from "./vocals/sha.mp3";
import sa from "./vocals/sa.mp3";
import ha from "./vocals/ha.mp3";
import ah from "./vocals/ah.mp3";
import one from "./vocals/one.mp3";
import two from "./vocals/two.mp3";
import three from "./vocals/three.mp3";
import four from "./vocals/four.mp3";
import five from "./vocals/five.mp3";
import six from "./vocals/six.mp3";
import seven from "./vocals/seven.mp3";
import eight from "./vocals/eight.mp3";
import nine from "./vocals/nine.mp3";
import zero from "./vocals/zero.mp3";
import wa from "./vocals/wa.mp3";
import correct from "./keystroke.wav";

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

