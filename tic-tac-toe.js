// variable declaration

let btn = document.querySelectorAll(".box")
let turnO = true
let btnarray = Array.from(btn)
btn.disabled = false
let index
let iswinner = false
let boxes = document.getElementsByClassName("box")

// 0 1 2
// 3 4 5
// 6 7 8

let wincondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// logic for changing inner text of buttons and playing with O & X

btn.forEach(e => {
    e.addEventListener("click", () => {
        if (turnO === true) {
            e.innerText = "O"
            turnO = false
        }
        else {
            e.innerText = "X"
            turnO = true
        }
        e.disabled = true
        checkWinner();
    })
});

// logc for selecting winner and printing the winner

function checkWinner() {
    for (const condition of wincondition) {
        let [a, b, c] = condition
        if (btnarray[a].innerText && btnarray[a].innerText === btnarray[b].innerText && btnarray[a].innerText === btnarray[c].innerText) {
            document.getElementById('result').innerText = `winner is ${btnarray[a].innerText}`
            btn.forEach(button => button.disabled = true);
            iswinner = true
            return;
        }
        else if (btnarray.every(button => button.disabled) && !iswinner) {
            document.getElementById('result').innerText = "It's a draw!";
        }
    }
}

// logic for reset buttom
let resetbtn = document.querySelector(".btn")

function resetgame() {
    resetbtn.addEventListener("click", () => {
        btnarray.forEach(button => {
            button.innerText = " "
            button.disabled = false
        });
        turnO = true
        iswinner = false
        document.getElementById('result').innerText = ` `
    })
}

// creating event for reeseting the game

resetbtn.addEventListener("click", resetgame());