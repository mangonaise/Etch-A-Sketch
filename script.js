let cells; 
const grid = document.getElementById("grid");
const dimensionSlider = document.getElementById("dimensions");
const dimensionText = document.getElementById("dimensions-text");
dimensionSlider.oninput = changeSliderValue;

let defaultColor = "white";
// let highlightColors = ["rgb(237, 168, 168)", "rgb(227, 141, 149)", "rgb(222, 111, 152)", "rgb(161, 87, 207)", "rgb(86, 59, 184)"];
let highlightColors = [
    "rgb(240, 245, 245)",
    "rgb(209, 230, 230)", 
    "rgb(167, 214, 214)", 
    "rgb(124, 191, 191)", 
    "rgb(83, 173, 173)", 
    "rgb(39, 145, 145)", 
    "rgb(16, 117, 117)", 
    "rgb(3, 87, 87)"];

document.getElementById("submit-dimensions").addEventListener('click', () => applyGridDimensions(getCustomDimensions()));

applyGridDimensions(1);

function changeSliderValue() {
    dimensionText.textContent = `Width/height: ${dimensionSlider.value}`;
}

function applyGridDimensions(width) {

    let totalCells = width * width;

    grid.textContent = '';

    for (let i = 0; i < totalCells; i++) {
        let newCell = document.createElement('span');
        newCell.classList.add("cell");

        let units = (screen.width > screen.height) ? "vh" : "vw";

        grid.style.width = `50${units}`;
        grid.style.height = `50${units}`;
        newCell.style.width = `${50/width}${units}`;
        newCell.style.height = `${50/width}${units}`;
        
        grid.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${width}, 1fr)`;
        grid.appendChild(newCell);
    }


    cells = Array.from(document.querySelectorAll(".cell"))

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => highlightCell(cell))
    })
}

function getCustomDimensions() {
    return parseInt(dimensionSlider.value);
}

function highlightCell(cell) {
    let newColorIndex = highlightColors.indexOf(cell.style.backgroundColor) + 1;
    console.log(cell.style.backgroundColor);
    cell.style.backgroundColor = highlightColors[newColorIndex];
}