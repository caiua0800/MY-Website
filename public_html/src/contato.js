let btn_getBack = document.getElementById('btn-getBack');

btn_getBack.addEventListener('click', () => {
    window.location.href = "https://caiuamello.com/"
})

let addMoreBtn = document.getElementById('addMoreBtn');

addMoreBtn.addEventListener('click', () => {
    let container = document.getElementById('container-box');

    let div = document.createElement('div');
    div.className = 'div-select languages';

    let h1 = document.createElement('h1');
    h1.textContent = 'Selecione a outra linguagem'

    let select = document.createElement('select');
    select.className = 'language-selection';

    let op1 = document.createElement('option');
    let op2 = document.createElement('option');
    let op3 = document.createElement('option');
    let op4 = document.createElement('option');
    let op5 = document.createElement('option');
    let op6 = document.createElement('option');
    let op7 = document.createElement('option');
    let op8 = document.createElement('option');
    let op9 = document.createElement('option');
    let op10 = document.createElement('option');
    let op11 = document.createElement('option');
    let op12 = document.createElement('option');

    op1.value = 'C';
    op1.textContent = 'C';

    op2.value = 'JAVA';
    op2.textContent = 'JAVA';

    op3.value = 'C++';
    op3.textContent = 'C++';

    op4.value = 'Python';
    op4.textContent = 'Python';

    op5.value = 'Java Script';
    op5.textContent = 'Java Script';

    op6.value = 'HTML';
    op6.textContent = 'HTML';

    op7.value = 'CSS';
    op7.textContent = 'CSS';

    op8.value = 'NodeJS';
    op8.textContent = 'NodeJS';

    op9.value = 'React';
    op9.textContent = 'React';

    op10.value = 'Bootstrap';
    op10.textContent = 'Bootstrap';

    op11.value = 'Banco de Dados SQL';
    op11.textContent = 'Banco de Dados SQL';

    op12.value = 'Banco de Dados No-SQ';
    op12.textContent = 'Banco de Dados No-SQ';

    select.appendChild(op1);
    select.appendChild(op2);
    select.appendChild(op3);
    select.appendChild(op4);
    select.appendChild(op5);
    select.appendChild(op6);
    select.appendChild(op7);
    select.appendChild(op8);
    select.appendChild(op9);
    select.appendChild(op10);
    select.appendChild(op11);
    select.appendChild(op12);

    div.appendChild(h1);
    div.appendChild(select);

    container.appendChild(div);
})