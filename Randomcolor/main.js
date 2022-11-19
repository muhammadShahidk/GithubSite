let box = document.querySelectorAll(".box");
// Changing each elemment textContent
// box.forEach((b)=>{
//     b.textContent = "hello";
// })
let runnig = false;


function randomColorGenerator(){
    let color;  
}

function resetCollors(){
    box.forEach((e)=>{
  
        e.style.backgroundColor = "initial";
     //    e.style.backgroundColor = "black";
     
     });
 
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
  
  let btn = document.querySelector("button");
  btn.addEventListener('click',()=>{
    if (runnig == false){
        runnig = true;
        btn.textContent = "Stop";
        start();
  
    }
    else{
    
         btn.textContent = "Change Color";
         runnig =  false;
         resetCollors();
       
    }
});
            
function start(){
    box.forEach((e)=>{
  
       e.style.backgroundColor = getRandomRgb().toString();
    //    e.style.backgroundColor = "black";
    
    });

    if (runnig == true){
        setTimeout("start()",50.800);
    }
}



// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//   box.style.backgroundColor = 'purple';
//   box.style.width = '300px';
//   box.
// });