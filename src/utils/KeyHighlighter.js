//returns string of keys

export const keyHighlighter = (character) => {

    const shiftkeys = [
        "\u0f0a", "\u0f04", "\u0f05", "\u0f06", "\u0f0e", "\u0f08", "\u0f38", "\u0f34", "\u0f3c", "\u0f3d", "\u0f7f", "\u0f11",
        "\u0f90", "\u0f91", "\u0f92", "\u0f94", "\u0f80", "\u0f84", "\u0f7b", "\u0f7d", "\u0f95", "\u0f96", "\u0f97", "\u0f99", "\u0fad",
        "\u0f9f", "\u0fa0", "\u0fa1", "\u0fa3", "\u0fa4", "\u0fa5", "\u0fa6", "\u0fa8", "\u0fa9", "\u0faa", "\u0fab",
        "\u0fae", "\u0faf", "\u0f71", "\u0fb1", "\u0fb2", "\u0fb3", "\u0fb4", "\u0fb6", "\u0fb7", "\u0fb8", "\u0020"
    ];

    const altkeys = [
        "\u0fd1", "\u0031", "\u0032", "\u0033", "\u0034", "\u0035", "\u0036", "\u0037", "\u0038", "\u0039", "\u0030", "\u002d", "\u003d", "\u005c",
        "\u0f88", "\u0f89", "\u0f8c", "\u0f83", "\u0f1a", "\u0f1b", "\u0f1c", "\u0f1d", "\u0f1e", "\u0f1f", "\u0028", "\u0029",
        "\u0f4a", "\u0f4b", "\u0f4c", "\u0f4e", "\u0f37", "\u0f7e", "\u0f39", "\u003b", "\u0327",
        "\u0f13", "\u0fbe", "\u0f03", "\u0f0f", "\u0f6a", "\u0f12", "\u0f65", "\u002c", "\u002e", "\u002f", "/",
        "\u0f0c"
    ];
    const altshiftkeys = [
        "\u0fd0", "\u0fd3", "\u0fd4", "\u0f3a", "\u0f3b", "\u0f85", "\u0f01", "\u0f8a", "\u002a", "\u0fd2", "\u002b", "\u0fba",
       "\u0f8d", "\u0f8e", "\u0f8f", "\u0f82", "\u0f8b", "\u0f99", "\u0f17", "\u0f18", "\u0f19", "\u0f3f", "\u0f3e",
       "\u0f9a", "\u0f9b", "\u0f9c", "\u0f9e", "\u0f35", "\u0f87", "\u0f86", "\u003a", "\u0022",
       "\u0f36", "\u0fbf", "\u0fb0", "\u0fbb", "\u0fbc", "\u0fb5", "\u0fd9", "\u0fda", "\u003f",
       "\u00a0"
    ];

    var flag = false;

    var characterHighlighter = character;


    var shiftkeysnew = shiftkeys.filter(char=>char===character);

    
    var altkeysnew = altkeys.filter(char=> char===character);

    var altshiftkeysnew = altshiftkeys.filter(char=> char===character);

    if(shiftkeysnew.length > 0){
        //return "shift";
        characterHighlighter = character + " {lshift} {rshift}";
    }
    if(altkeysnew.length >0){
       // return "alt";
        characterHighlighter = character + " {altgr}";
    }
    if(altshiftkeysnew.length > 0){
        characterHighlighter = character + " {altgr} {lshift}";
        // return "alt-shift";
    }


    return characterHighlighter;
    // for(var i=0; i<shiftkeys.length; i++){
    //     if(character == shiftkeys[i]){
    //         flag=true;
    //         characterHighlighter = character + " {lshift} {rshift}";
    //         break;
    //     }
    // }
    // if(flag){
    //     return characterHighlighter;
    // }
    // else{
    //     return character;
    // }
};