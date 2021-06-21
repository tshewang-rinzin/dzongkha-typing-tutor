export const generate = (lessonname) => {

  //const lessonArray = lesson.basic.lesson3;
  const lessonArray = lessonname;
  
  // return new Array(0)
  //   .fill()
  //   .map(_ => lessonArray)
  //   .join(' ');
  
  return lessonArray.split('').join('');
};