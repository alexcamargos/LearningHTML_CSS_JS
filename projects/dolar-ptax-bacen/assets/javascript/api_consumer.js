// Endereço padrão da API, dados retornados em formato json.
const urlBase =
    'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/';

const url_resource = 'CotacaoDolarDia(dataCotacao=@dataCotacao)?';
const url_parameters = '@dataCotacao=%2706-18-2021%27&$format=json';

const getURL = urlBase + url_resource + url_parameters;

// Função responsável por fazer requisições para a API e inserir as respostas na variável pokemon
function requestPTAX(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            ptaxInfoInnerHTML('ptax-info', data);
        })
        .catch((err) => console.log(err));
}

function createPTAXCard(data) {
    var ptaxInfo = `
    
    <h2>Contação por dia:</h2>
    <h3>Dolar PTAX Valor Compra: R$${data.value[0].cotacaoCompra}</h3>
    <h3>Dolar PTAX Valor Venda: R$${data.value[0].cotacaoCompra}</h3>
    <h3>Dolar PTAX Data da última cotação: R$${data.value[0].cotacaoCompra}</h3>
    `;

    return ptaxInfo;
}

function ptaxInfoInnerHTML(element, data) {
    document.getElementById(element).innerHTML = createPTAXCard(data);
}

document.addEventListener('DOMContentLoaded', requestPTAX(getURL));
