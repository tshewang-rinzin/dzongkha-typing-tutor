export const GameChars = (lessonname) => {
    //const lessonArray = lesson.basic.lesson3;
    const lessonArray = lessonname.split("");
    // return new Array(0)
    //   .fill()
    //   .map(_ => lessonArray)
    //   .join(' ');
     const characters = lessonArray.filter(item => {
         if(item !== "\u0f0b"){
            return item;
         }
     })

     const characters1 = characters.filter(item =>{
        if(item !== "\u0f0d"){
            return item;
         }
    });

    const characters2 = characters1.filter(item =>{
        if(item !== " "){
            return item;
         }
    });
    return characters2;
};