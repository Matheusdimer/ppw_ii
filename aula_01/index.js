const search = document.getElementById('search');
const list = document.getElementById('marcas');
const tableBody = document.querySelector('tbody');
const spinner = document.getElementById('spinner');
const table = document.querySelector('table');

const PATH = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';

let marcas = [];

function onInit() {
    loadMarcas();
}

function loadMarcas() {
    fetch(PATH).then(response => response.json()).then(data => renderMarcasList(data));
}

function renderMarcasList(data) {
    marcas = data;

    marcas.forEach((marca) => {
        const option = document.createElement('option');
        option.label = marca.nome;
        option.value = marca.codigo;
        list.append(option);
    });
}

function loadCarros() {
    const marca = list.value;

    if (marca) {
        fetch(`${PATH}/${marca}/modelos`)
            .then(response => response.json())
            .then(data => renderCarros(data.modelos));
    }
}

function renderCarros(carros) {
    tableBody.innerHTML = '';

    carros.forEach(carro => {
        const row = document.createElement('tr');
        const code = document.createElement('td');
        const name = document.createElement('td');

        code.textContent = carro.codigo;
        name.textContent = carro.nome;

        row.append(code, name);
        tableBody.append(row);
    });
}

function submit(event) {
    event.preventDefault();
    loadCarros();
}

onInit();