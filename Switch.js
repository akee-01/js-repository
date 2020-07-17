  /*Using Switch case */
  let marks = prompt("Enter your marks.");
  switch(true){
    case (+marks > 80) :
        grade = "A";
        break;
    case (+marks > 70) :
        grade = "B";
        break;
    case (+marks > 60) :
        grade = "C";
        break;
    case (+marks > 50) :
        grade = "D";
        break;
    case (+marks > 40) : 
        grade = "E";
        break;
    case (+marks > 0) :
        grade = "Fail";
        break;
    default:
        grade = "Incorrect value."
}
console.log(`Marks are ${marks} and grade is ${grade}.`); 

