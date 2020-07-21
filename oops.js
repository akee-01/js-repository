    // let value = prompt("Enter the positive elements of array or enter -1 to exit.")
    // var array = []
    // while(value != -1){
    //     if(value > 0){
    //     array.push(value)
    //     }
    //     value = prompt("Enter next value or -1 to exit")
    // }
    // let result = array.filter(el=>el%2!=0).map(el=>el**3);
    // console.log(result)

//Question 2
// class User{
//     constructor(name, age, email){
//         this.name = name;
//         this.age = age;
//         this.email= email;
//     }
//     login(){
//         console.log(`${this.name} has logged in`);
//         return this;
//     }
//     logout(){
//         console.log(`${this.name} has logged out`);
//         return this;
//     }
// }
// class Moderator extends User{
//     constructor(name, age, email){
//         super(name, age, email);
//         this.coins=0;

//     }
//     addCoins(){
//         this.coins++;
//         console.log(`${this.name} has ${this.coins} coins(s) now.`);
//         return this;
//     }
//     removeCoins(){
//         this.coins--;
//         console.log(`${this.name} has ${this.coins} coin(s) now.`);
//         return this;
//     }   
// }
// let user1 = new User("Prakash Gollu", 23, "pg@ggoli.com");
// user1.login().logout();

// let user2 = new Moderator("kunal ganjawala", 82, "kgl@ggoli.com");
// user2.addCoins().addCoins();
// user2.removeCoins();


//Question 3

var rand = parseInt(Math.random()*200+1);
fetch(`https://jsonplaceholder.typicode.com/todos/${rand}`)
.then(response=>response.json())
.then(data=>console.log(data))
