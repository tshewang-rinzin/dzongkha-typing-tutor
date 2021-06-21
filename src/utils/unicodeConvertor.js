export const convertToUnicodeNumber = (input, lng) => {
    var standard_numsets = new Array("0","1","2","3","4","5","6","7","8","9");
    var dzongkha_numsets = new Array("༠","༡","༢","༣","༤","༥","༦","༧","༨","༩");

    var englishDigits = {
      '༠': '0',
      '༡': '1',
      '༢': '2',
      '༣': '3',
      '༤': '4',
      '༥': '5',
      '༦': '6',
      '༧': '7',
      '༨': '8',
      '༩': '9'
    };

    var dzongkhaDigits = {
      '0': '༠',
      '1': '༡',
      '2': '༢',
      '3': '༣',
      '4': '༤',
      '5': '༥',
      '6': '༦',
      '7': '༧',
      '8': '༨',
      '9': '༩'
    };
    if(localStorage.getItem('lng') == "dz"){
      return input.toString().replace(/[0123456789]/g, function(s) {
        return dzongkhaDigits[s];
      });
    }
    else{
      return input;
    }

    //return input;

  }