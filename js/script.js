function changeSize() {
    let userInput = prompt("How many squares per side (max 100)?", 16);
    if (userInput > 100) {
        userInput = prompt("Too high input - try again. Max 100", 16);
    } else {
        sketchPad.textContent = "";
        makeGrid(userInput);
    }
}

function makeGrid(userInput) {
    for (i = 0; i < userInput; i++) {
        let element = document.createElement('div');
        element.classList.add('pad');
        for (j = 0; j < userInput; j++) {
            let newPad = document.createElement('div');
            newPad.classList.add('newpad');
            element.appendChild(newPad);
        }
        sketchPad.appendChild(element);
    }
    const hover = document.querySelectorAll('.newpad');
    hover.forEach((pad) => pad.addEventListener('mouseover', changeColor));
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(e) {
    let color = getRandomColor();
    this.style.backgroundColor = color;
}

let sketchPad = document.querySelector('.sketchPad');
let gridSize = document.querySelector('#size');
gridSize.addEventListener('click', changeSize);

makeGrid(16);









