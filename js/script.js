let sketchPad = document.querySelector('.sketchPad');

for (i = 0; i < 4; i++) {
    let element = document.createElement('div');
    element.classList.add('pad');
    for (j = 0; j < 4; j++) {
        let newPad = document.createElement('div');
        newPad.classList.add('newpad');
        element.appendChild(newPad);
    }
    sketchPad.appendChild(element);
}

function hovered(e) {
    e.target.classList.add('touched');

}
const hover = document.querySelectorAll('.newpad');
hover.forEach((pad) => pad.addEventListener('mouseover', hovered));
