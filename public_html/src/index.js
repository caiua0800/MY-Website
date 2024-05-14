// parte do design da página
document.querySelector('#ver_mais').addEventListener('click', () => {
    let texto_apresentacao = document.querySelector('#texto_apresentacao');
    texto_apresentacao.style.maxHeight = '100%';
    document.querySelector('#ver_mais').style.display = 'none';
});

document.querySelector('#see_more').addEventListener('click', () => {
    let texto_apresentacao = document.querySelector('#texto_apresentacao_ingles');
    texto_apresentacao.style.maxHeight = '100%';
    document.querySelector('#see_more').style.display = 'none';
});

// fim do design

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