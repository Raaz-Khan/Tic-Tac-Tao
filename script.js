console.log("js is running");

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".resetBtn");
let winnerBox = document.querySelector(".winnerBox")
let newGameBtn = document.querySelector(".newGameBtn");
let message = document.querySelector(".message");
let turnO = true;
let count = 0;

let winMatch = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]


let disableBtn = ()=>{
    for (const box of boxes) {
        // box.innerText = "";
        box.disabled = true;
    }
}

let enableBtn = ()=>{
    for (const box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
}




let TieCheck = ()=>{
    count ++;
    if (count == 9) {
        message.innerHTML = `There is Tie`;
        winnerBox.classList.remove("hide");
    }

}

// winner check

let winnerCheck = ()=>{
    
         for (const match of winMatch) {

            pos1 = boxes[match[0]].innerText;
            pos2 = boxes[match[1]].innerText;
            pos3 = boxes[match[2]].innerText;

            if (pos1!="" && pos2!="" && pos3!="") {
                if (pos1 === pos2 && pos2 === pos3) {
                    message.innerHTML = `winner is ${pos1}`;
                    winnerBox.classList.remove("hide");
                    disableBtn();
                }
            } 
         }
    }




// input

boxes.forEach(box => {
    
    
    box.addEventListener("click",()=>{
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
            
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        winnerCheck();
        TieCheck();
    });
});



let restart = ()=>{
    turnO = true;
    count = 0;
    winnerBox.classList.add("hide");
    enableBtn();
}

resetBtn.addEventListener("click",()=>{
    restart();
});

newGameBtn.addEventListener("click",()=>{
        restart();
});