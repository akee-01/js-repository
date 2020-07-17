let marks = prompt("Enter your marks.");
/* Using nested if-else */

let grade;
if(+marks > 90){
    grade = "A+";
}else if(+marks > 80){
    grade = "A";
}else if(+marks > 70){
    grade = "B+";
}else if(+marks > 60){
    grade = "C";
}else if(+marks > 50){
    grade = "D";
}else if(+marks > 40){
    grade = "E";
}else if(+marks > 0)
    grade = "Fail";
else{
    grade = "Incorrect marks."
}

console.log(`Marks are ${marks} and grade is ${grade}.`); 

/* Using ternary operator. */
grade = (+marks > 80) ? "A" : (+marks > 70) ? "B" : (+marks > 60) ? "C": (+marks > 50) ? "D" : (+marks > 40) ? "E" : "Fail" ;
console.log(`Marks are ${marks} and grade is ${grade}.`); 