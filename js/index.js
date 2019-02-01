var youChoose = "";
var compChoose = "";
var rockDis = "Rock!";
var paperDis = "Paper!";
var scissorsDis = "Scissors!";
var youScore = 0;
var compScore = 0;
var zero = 0;

document.getElementById("Rock").addEventListener("click", function(){
    document.getElementById("Person").innerHTML = rockDis;
    rock();
    setTimeout(function(){document.getElementById("youScore").innerHTML = youScore}, 1200);
    setTimeout(function(){document.getElementById("compScore").innerHTML = compScore}, 1200);
    });

//setTimeout(function() {
 //   document.getElementById("safeForm4d").submit();
//}, 3000);
let rock = function(){
   let compMove = Math.floor(Math.random() * Math.floor(3));
   if(compMove === 0){
    setTimeout(function(){document.getElementById("Computer").innerHTML = rockDis}, 700);
      } else if(compMove === 1){
        setTimeout(function(){document.getElementById("Computer").innerHTML = paperDis;}, 700);
    compScore += 1;    
    } else if(compMove === 2){
    setTimeout(function(){document.getElementById("Computer").innerHTML = scissorsDis}, 700);
    youScore += 1;
   }
};

document.getElementById("Paper").addEventListener("click", function(){
    document.getElementById("Person").innerHTML = paperDis;
    paper();
    setTimeout(function(){document.getElementById("youScore").innerHTML = youScore}, 1200);
    setTimeout(function(){document.getElementById("compScore").innerHTML = compScore}, 1200);
    });


let paper = function(){
   let compMove = Math.floor(Math.random() * Math.floor(3));
   if(compMove === 0){
    setTimeout(function(){document.getElementById("Computer").innerHTML = rockDis}, 700); 
      youScore += 1;
      } else if(compMove === 1){
        setTimeout(function(){document.getElementById("Computer").innerHTML = paperDis;}, 700);
      } else if(compMove === 2){
    setTimeout(function(){document.getElementById("Computer").innerHTML = scissorsDis}, 700);
     compScore += 1;
   }
};

/*let paper= function(){
   let compMove = Math.floor(Math.random() * Math.floor(3));
   if(compMove === 0){setTimeout(function(){document.getElementById("Computer").innerHTML = rockDis}, 700);
     youScore += 1;     
    } else if(compMove === 1){setTimeout(function(){   
    document.getElementById("Computer").innerHTML = paperDis},700);
      } else if(compMove === 2){setTimout(function(){
       document.getElementById("Computer").innerHTML = scissorsDis},700);
     compScore += 1;   
   }
}; */

document.getElementById("Scissors").addEventListener("click", function(){
    document.getElementById("Person").innerHTML = scissorsDis;
    scissors();
    setTimeout(function(){document.getElementById("youScore").innerHTML = youScore}, 700);
    setTimeout(function(){document.getElementById("compScore").innerHTML = compScore}, 700);
    });


let scissors= function(){
   let compMove = Math.floor(Math.random() * Math.floor(3));
     if(compMove === 0){setTimeout(function()                     {document.getElementById("Computer").innerHTML = rockDis}, 700);
     compScore += 1;     
     } else if(compMove === 1){setTimeout(function(){   
    document.getElementById("Computer").innerHTML = paperDis}, 700);
      youScore += 1;
      } else if(compMove === 2){setTimeout(function(){
     document.getElementById("Computer").innerHTML = scissorsDis}, 700);
   }
};

let reset = function(){
  youScore = 0;  
  compScore = 0;
}


document.getElementById("Reset").addEventListener("click", function(){
    reset();
    document.getElementById("youScore").innerHTML = youScore;
    document.getElementById("compScore").innerHTML = compScore;
    document.getElementById("Person").innerHTML = youChoose;
    document.getElementById("Computer").innerHTML = compChoose;
});