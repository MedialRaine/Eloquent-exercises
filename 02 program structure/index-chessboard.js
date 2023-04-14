let initialString = "";
let size = 8;

// this for will track the lines
for (let axisY = 0; axisY < size; axisY++){
    //this for will track the characters
    for(let axisX = 0; axisX < size; axisX++){
      if((axisX + axisY) % 2 === 0 ){
        //if the addition of the axis X and Y are even, then it's going to add a empty character to the initial string variable
        initialString += " ";
      } else {
        //otherwise is going to add a hashtag
        initialString +="#";
      }
   }
   //we keep the track of the jumpline just after the inner loop gets run, then we increase it.
   initialString += "\n"
}
//when the both loops reach the size limit, just then we console the variable
console.log(initialString);