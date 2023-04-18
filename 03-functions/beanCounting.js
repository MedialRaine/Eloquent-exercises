// Your code here.

function countBs(string){
  let capitalBCount = 0;
	for(let count = 0; count < string.length; count ++){
      if (string.[index] === B){
        capitalBCount + 1; 
      }
    }
  return capitalBCount;
}

function countChar (string, character){
 let characterCount = 0;
 for(let count = 0; count < string.length; count ++) {
    
  if(string.[index] === character) {
    characterCount + 1;
  }
 }
  return characterCount
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4