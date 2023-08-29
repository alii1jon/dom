// let box=document.querySelector('.box')

// let div=document.createElement("div");
// let h1=document.createElement("h1");
// h1.innerHTML="bye";
// h1.classList.add("h1");
// // h1.classList.remove("h1");
// div.appendChild(h1);
// box.appendChild(div);
// console.log(h1);

// const input1 = Number(document.getElementById("input1").value);
// const input2 = Number(document.getElementById("input2").value);

// if (input1 > input2) {
//   console.log("Первое число больше второго");
// } else if (input2 > input1) {
//   console.log("Второе число больше первого");
// } else {
//   console.log("Числа равны");
// }


// let box=document.querySelector('.box')
// let btn=document.createElement("button");
// btn.innerHTML="hello";
// btn.onclick=function(){
//     btn.classList.toggle("a");
//     let div=document.createElement("div");
//     let h1=document.createElement("h1")
//     h1.innerHTML="hello world";
//     h1.classList.add("h1");
//     div.appendChild(h1);
//     box.appendChild(div)
// };
// box.appendChild(btn);

// 1
let input=document.querySelector('.input')
let btn = document.querySelector(".btn")
let p=document.querySelector("p")
btn.onclick=function(){
    btn.classList.toggle("a");
    let div=document.createElement("div"    )
    let h1=document.createElement("h1")

    const input1 = Number(document.getElementById("input1").value);
    const input2 = Number(document.getElementById("input2").value);

    if (input1 > input2) {
      p.innerHTML=("Первое число больше второго");
    } else if (input2 > input1) {
      p.innerHTML=("Второе число больше первого");
    } else {
      p.innerHTML=("Числа равны");
    }
};
//    input.appendChild(btn);

// 2
let btn=document.querySelector(".btn")
let input1=document.querySelector("#input1")
btn.onclick=function(){
    alert(input1.value)
};


// 3
function checkNumber() {
  const number = parseInt(document.getElementById("numberInput").value);

  if (number < 10) {
     alert("welcome");
  } else {
    alert("Goodbye");
  }
}


// 4\
let number = 0;
const numberElement = document.getElementById("number");

function incrementNumber() {
  number++;
  updateNumber();
}

function decrementNumber() {
  number--;
  updateNumber();
}

function resetNumber() {
  number = 0;
  updateNumber();
}

function updateNumber() {
  numberElement.innerText = number;
  numberElement.className = number < 0 ? "red" : "green";
}

// 5
 function factorial() {
            var number = document.getElementById("numberInput").value;
            var result = 1;
            
            for (var i = 1; i <= number; i++) {
                result *= i;
            }
            
            alert("Факториал числа " + number + " равен " + result);
          }

// 6

 function turnOn() {
   document.getElementById("lamp").src = "./lamp_off.png";
 }

 function turnOff() {
   document.getElementById("lamp").src = "./lamp_off.png";
 }


let y = document.querySelector(".light")
let x = document.querySelector(".dark")
let yx = document.querySelector(".btn2");
let xY = document.querySelector(".btn");

 xY.onclick = () =>{
   x.style.display = "block"
   y.style.display = "none"
 }

  yx.onclick = () => {
    y.style.display = "block";
    x.style.display = "none";
  };