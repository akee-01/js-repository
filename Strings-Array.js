//Strings

let str = "Aakash";
console.log( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)



// If we dont provide 2ndd args, then slicing will from 1st index to last index of the string:<br>
console.log( str.slice(2) ); // it will start from 2 and goes till last index

// these are same for substring
 console.log( str.substring(2, 4) ); // "ka"

// // The first argument may be negative, to count from the end:

 console.log( str.substr(-4, 2) ); // 'gi', from the 4th position get 2 characters


var str2 = 'Aakash is working hard';
console.log(str2)
console.log(str2.replace("is", "was,",))


//Arrays


let arr = ["Aakash", "Learning", "JavaScript"];
console.log( arr );
delete arr[1]; // remove "Learning"

console.log( arr[1] ); // undefined
console.log( arr );
console.log( arr.length );

let arr2 = ["we", "love", "India"];

console.log(arr2);
arr2.splice(1, 1) // from index 1 remove 1 element

/console.log( arr2 ); 

let arr3 = ["lets", "go", "tracking", "some", "day"];
console.log(arr3);
let removed = arr3.splice(0, 2);

console.log( removed ); // "lets", "go"  array of removed elements


let arr4 = [ 92, 29, 119,220 ]
console.log( arr4 );
// // the method reorders the content of arr
arr4.sort();
console.log( arr4 ); // 1, 15, 2


function compareNumeric(a, b) {
   if (a > b) return 1;
   if (a == b) return 0;
   if (a < b) return -1;
}

let arr5 = [119, 220, 29, 92];
console.log(arr5);
arr5.sort(compareNumeric);

console.log(arr5); //[29, 92, 119, 220] 