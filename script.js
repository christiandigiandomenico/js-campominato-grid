const gridElement = document.querySelector("#grid");
const buttonElement = document.querySelector("#start-game")
const difficultyElement = document.querySelector("#difficulty")

// function getRowsAndColumns(difficulty) {
//     squareNumbers = 0

//     if (difficulty === "1") {
//         squareNumbers = 100
//     } else if (difficulty === "2") {
//         squareNumbers = 81
//     } else if (difficulty === "3") {
//         squareNumbers = 49
//     } else {
//         rows = columns = 0;
//     }

// }

buttonElement.addEventListener("click", function () {


    let numeroCaselle = 0;
    const selEle = document.getElementById("difficulty");

    let difficulty = selEle.value;

    let aggClasse = "a";

    if (difficulty == 1) { numeroCaselle = 100; }
    if (difficulty == 2) { aggClasse = "square_81"; numeroCaselle = 81; }
    if (difficulty == 3) { aggClasse = "square_49"; numeroCaselle = 49; }


    gridElement.innerHTML = "";


    for (let i = 1; i <= numeroCaselle; i++) {

        const newElement = document.createElement("div");
        newElement.classList.add("square");
        newElement.classList.add(aggClasse);
        newElement.innerText = i;

        console.log(this.innerText)

        newElement.addEventListener("click", function () {

            this.classList.toggle("active");

            console.log(this.innerText)

        });

        gridElement.append(newElement);

    }

})