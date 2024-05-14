

//começo mudando de idioma

document.addEventListener('DOMContentLoaded', () => {
    let english = document.querySelectorAll('.english');

    english.forEach(e => {
        e.classList.add('d-none');
    })
})

document.querySelector('#PT').addEventListener('click', () => {paraPortugues();});
document.querySelector('#EN').addEventListener('click', () => {paraIngles();});
document.querySelector('#PT-NAV').addEventListener('click', () => {paraPortugues();});
document.querySelector('#EN-NAV').addEventListener('click', () => {paraIngles();});

function paraIngles(){
    let originals = document.querySelectorAll('.original');
    let english = document.querySelectorAll('.english');

    english.forEach(e => {
        e.classList.remove('d-none');
    })

    originals.forEach(e => {
        e.classList.add('d-none');
    })
}

function paraPortugues(){
    let originals = document.querySelectorAll('.original');
    let english = document.querySelectorAll('.english');

    english.forEach(e => {
        e.classList.add('d-none');
    })

    originals.forEach(e => {
        e.classList.remove('d-none');
    })
}
