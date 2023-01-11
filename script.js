console.log("Tic Tac Toe Game");
function reset_func() {}
let music = new Audio("gameOver.wav");

let turn = "X";

const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
let boxes = document.getElementsByClassName("box");

Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (boxtext.innerText == "") {
      boxtext.innerText = turn;
      turn = changeTurn();
    }
  });
});
