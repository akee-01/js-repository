function background(){
    let Color = ['Wheat', 'grey', 'Yellowgreen', 'Skyblue','Pink'];
 
    function mutliColor () {
        const ColorLength = Color.length;
        console.log(ColorLength);
        let random = Math.trunc(Math.random() * ColorLength);
        console.log(Color[random]);
        document.body.style.backgroundColor = Color[random];
    }

    setInterval(mutliColor, 5000);
}
document.querySelector('.btn1').addEventListener("click",background);




function tables() {
    let show = document.querySelector('#tables');
        var i = 0;
        var n = prompt("enter a number:")

        for (i = 1; i <= 10; i++) {
            document.write('<table border="1" cellspacing="1">');
            for (i = 1; i <= 10; i++) {
                document.write("<tr><td>" + n + " x " + i + " = " + n * i + "</td></tr>");
            }
            document.write("</table> <br> <h2>Reload to go back </h2>");
           
            
        }    
}

document.querySelector('.btn2').addEventListener("click", tables);


function Welcome(){
    let userName = prompt("Enter The Name:- ");  //User Input

    let btn = document.getElementById('btn');
    let bodyBg = document.getElementById('bodyBg');
    let name1 = document.getElementById('name1');
    let h3Clock = document.getElementById('clock');
   

    name1.innerHTML = `Welcome to our Family \n ${userName}.`;  //Display User Name
    btn.innerHTML= `Dark Mode .`;
   

    function clock() {           //Clock
        let date = new Date();
        let time = date.toLocaleTimeString();
        h3Clock.innerText = time;
    }
    setInterval(clock, 1000)  //Live Clock
}

document.querySelector('.btn3').addEventListener("click", Welcome);
btn.onclick = () => {                          //Dark Mode
    bodyBg.classList.toggle('bg');
}