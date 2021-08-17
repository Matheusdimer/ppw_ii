const search = document.getElementById('search');
const list = document.getElementById('marcas');
const tableBody = document.querySelector('tbody');

const PATH = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';

function onInit() {
    loadMarcas();
}

function loadMarcas() {
    fetch(PATH).then(response => response.json()).then(data => renderMarcasList(data));
}

function renderMarcasList(marcas) {
    list.append(
        marcas.map(marca => {
            const option = document.createElement('option');
            option.value = marca.nome;
            return option;
        })
    );
}

onInit();