//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.


let boardElements = document.querySelector(".board")
const squareEls = document.querySelectorAll(".sqr")
let messageEls = document.querySelector("#message")


let playerX = "X"
let playerO = "O"
currentPlayer = "X"
let winner = false
let tie = false
function init(){
    function render(){}
}


let board = ["","","","","","","","",""]
// board[0] = "#0"
// board[1] = "#1"
// board[2] = "#2"
// board[3] = "#3"
// board[4] = "#4"
// board[5] = "#5"
// board[6] = "#6"
// board[7] = "#7"
// board[8] = "#8"




squareEls.forEach((oneElement, index)=>{
    
    
    oneElement.addEventListener("click",(event)=>{
        board[event.target.id] = currentPlayer
       if(!oneElement.innerText && currentPlayer =="X"){
        oneElement.innerText = playerX
        currentPlayer = "O"
       }
       else if(!oneElement.innerText && currentPlayer =="O"){
        oneElement.innerText = playerO
        currentPlayer = "X"


       }
       checkForWinner()
     
    })
})


function checkForWinner(){
    console.log(board)
    if(board[0]=== "X" && board[1]=== "X" && board[2]=== "X" || 
        board[0]=== "X" && board[3]=== "X" && board[6]=== "X" || 
        board[0]=== "X" && board[4]=== "X" && board[8]=== "X" || 
        board[1]=== "X" && board[4]=== "X" && board[7]=== "X" ||
        board[2]=== "X" && board[4]=== "X" && board[6]=== "X" || 
        board[2]=== "X" && board[5]=== "X" && board[8]=== "X" ||
        board[3]=== "X" && board[4]=== "X" && board[5]=== "X" ||
        board[6]=== "X" && board[7]=== "X" && board[8]=== "X"
    ){
        console.log("X is the winner")
        currentPlayer = null
        messageEls.textContent = "X is the winner"
    }

   else  if(board[0]=== "O" && board[1]=== "O" && board[2]=== "O" || 
    board[0]=== "O" && board[3]=== "O" && board[6]=== "O" || 
    board[0]=== "O" && board[4]=== "O" && board[8]=== "O" || 
    board[1]=== "O" && board[4]=== "O" && board[7]=== "O" ||
    board[2]=== "O" && board[4]=== "O" && board[6]=== "O" || 
    board[2]=== "O" && board[5]=== "O" && board[8]=== "O" ||
    board[3]=== "O" && board[4]=== "O" && board[5]=== "O" ||
    board[6]=== "O" && board[7]=== "O" && board[8]=== "O"){
            console.log("O is the winner")
            currentPlayer = null
            messageEls.textContent = "O is the winner"
        }

}


