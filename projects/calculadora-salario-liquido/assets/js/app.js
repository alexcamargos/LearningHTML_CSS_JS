// -------------------------------------------------------------------------------------------------
// Name: app.js
// Version: 0.0.1
//
// Summary: Calculadora de Salário Líquido - Salário bruto x Salário Líquido
//
// Author: Alexsander Lopes Camargos
// Author-email: alcamargos@vivaldi.net
//
// License: MIT
// -------------------------------------------------------------------------------------------------

// Tabela de alíquotas do INSS para o ano de 2022.
const tabelaINSS = {
    // Faixa 01: Salário de contribuição até R$ 1.212,00.
    faixa01: {
        salario: 1212,
        aliquota: 0.075, // 7,5%
        parcela_deduzir: 0,
    },
    // Faixa 02: Salário de contribuição de R$ 1.212,01 até R$ 2427.35.
    faixa02: {
        salario: 2427.35,
        aliquota: 0.09, // 9%
        parcela_deduzir: 18.18,
    },
    // Faixa 03: Salário de contribuição de R$ 2427.36 até R$ 3641.03.
    faixa03: {
        salario: 3641.03,
        aliquota: 0.12, // 12%
        parcela_deduzir: 91.0,
    },
    // Faixa 04: Salário de contribuição de R$ 3641.04 até R$ 7087.22
    faixa04: {
        salario: 7087.22,
        aliquota: 0.14, // 14%
        parcela_deduzir: 163.82,
    },
    // Faixa 05: Salário de contribuição acima de R$ 7087.22.
    faixa05: {
        parcela_deduzir: 828.39,
    },
};

// Tabela de alíquotas do IRRF para o ano de 2022.
const tabelaIRRF = {
    // Faixa 01: Salário de contribuição até R$ 1.903,98.
    faixa01: {
        salario: 1903.98,
        aliquota: 0,
        parcela_deduzir: 0,
    },
    // Faixa 02: Salário de contribuição de R$ 1.903,99 até R$ 2.826,65.
    faixa02: {
        salario: 2826.65,
        aliquota: 0.075, // 7,5%
        parcela_deduzir: 142.8,
    },
    // Faixa 03: Salário de contribuição de R$ 2.826,66 até R$ 3.751,05.
    faixa03: {
        salario: 3751.05,
        aliquota: 0.15, // 15%
        parcela_deduzir: 354.8,
    },
    // Faixa 04: Salário de contribuição de R$ 3.751,06 até R$ 4.664,68.
    faixa04: {
        salario: 4664.68,
        aliquota: 0.225, // 22,5%
        parcela_deduzir: 636.13,
    },
    // Faixa 05: Salário de contribuição acima de R$ 4.664,68.
    faixa05: {
        salario: 4664.68,
        aliquota: 0.275, // 27,5%
        parcela_deduzir: 869.36,
    },
};

// Tabela de dedução por dependente.
const tabelaDependentes = {
    valor: 189.59,
};

function calculaDeducaoINSS(salario) {
    // Calcula a dedução do INSS.
    let deducaoINSS = 0;
    let aliquotaINSS = 0;

    // Verifica a faixa do salário de contribuição.
    if (salario <= tabelaINSS.faixa01.salario) {
        // Faixa 01: Salário de contribuição até R$ 1.212,00.
        deducaoINSS = parseFloat(salario * tabelaINSS.faixa01.aliquota);
        aliquotaINSS = parseFloat(tabelaINSS.faixa01.aliquota * 100);
    } else if (
        salario > tabelaINSS.faixa01.salario &&
        salario <= tabelaINSS.faixa02.salario
    ) {
        // Faixa 02: Salário de contribuição de R$ 1.212,01 até R$ 2.427,35.
        deducaoINSS = parseFloat(
            salario * tabelaINSS.faixa02.aliquota -
                tabelaINSS.faixa02.parcela_deduzir
        );
        aliquotaINSS = parseFloat(tabelaINSS.faixa02.aliquota * 100);
    } else if (
        salario > tabelaINSS.faixa02.salario &&
        salario <= tabelaINSS.faixa03.salario
    ) {
        // Faixa 03: Salário de contribuição de R$ 2.427,36 até R$ 3.641,03.
        deducaoINSS = parseFloat(
            salario * tabelaINSS.faixa03.aliquota -
                tabelaINSS.faixa03.parcela_deduzir
        );
        aliquotaINSS = parseFloat(tabelaINSS.faixa03.aliquota * 100);
    } else if (
        salario > tabelaINSS.faixa03.salario &&
        salario <= tabelaINSS.faixa04.salario
    ) {
        // Faixa 04: Salário de contribuição de R$ 3.641,04 até R$ 7.087,22.
        deducaoINSS = parseFloat(
            salario * tabelaINSS.faixa04.aliquota -
                tabelaINSS.faixa04.parcela_deduzir
        );
        aliquotaINSS = parseFloat(tabelaINSS.faixa04.aliquota * 100);
    } else {
        // Faixa 05: Salário de contribuição acima de R$ 7.087,22.
        deducaoINSS = parseFloat(tabelaINSS.faixa05.parcela_deduzir);
        aliquotaINSS = false;
    }

    // Retorna a dedução do INSS e a alíquota aplicada, arredondada para duas casas decimais.
    return {
        valor: deducaoINSS,
        aliquotaINSS: aliquotaINSS,
    };
}

function calculoDependentes(dependentes) {
    // Calcula a dedução por dependentes.
    let deducaoDependentes = parseFloat(dependentes * tabelaDependentes.valor);

    // Retorna a dedução por dependentes, arredondada para duas casas decimais.
    return deducaoDependentes;
}

function calculaDeducaoIRPF(salario) {
    // Calcula a dedução do IRRF.
    let deducaoIRRF = 0;
    let aliquotaIRRF = 0;

    // Verifica a faixa do salário de contribuição.
    if (salario <= tabelaIRRF.faixa01.salario) {
        // Faixa 01: Salário de contribuição até R$ 1.903,98.
        deducaoIRRF = parseFloat(salario * tabelaIRRF.faixa01.aliquota);
        aliquotaIRRF = parseFloat(tabelaIRRF.faixa01.aliquota * 100);
    } else if (
        salario > tabelaIRRF.faixa01.salario &&
        salario <= tabelaIRRF.faixa02.salario
    ) {
        // Faixa 02: Salário de contribuição de R$ 1.903,99 até R$ 2.826,65.
        deducaoIRRF = parseFloat(
            salario * tabelaIRRF.faixa02.aliquota -
                tabelaIRRF.faixa02.parcela_deduzir
        );
        aliquotaIRRF = parseFloat(tabelaIRRF.faixa02.aliquota * 100);
    } else if (
        salario > tabelaIRRF.faixa02.salario &&
        salario <= tabelaIRRF.faixa03.salario
    ) {
        // Faixa 03: Salário de contribuição de R$ 2.826,66 até R$ 3.751,05.
        deducaoIRRF = parseFloat(
            salario * tabelaIRRF.faixa03.aliquota -
                tabelaIRRF.faixa03.parcela_deduzir
        );
        aliquotaIRRF = parseFloat(tabelaIRRF.faixa03.aliquota * 100);
    } else if (
        salario > tabelaIRRF.faixa03.salario &&
        salario <= tabelaIRRF.faixa04.salario
    ) {
        // Faixa 04: Salário de contribuição de R$ 3.751,06 até R$ 4.664,68.
        deducaoIRRF = parseFloat(
            salario * tabelaIRRF.faixa04.aliquota -
                tabelaIRRF.faixa04.parcela_deduzir
        );
        aliquotaIRRF = parseFloat(tabelaIRRF.faixa04.aliquota * 100);
    } else {
        // Faixa 05: Salário de contribuição acima de R$ 4.664,68.
        deducaoIRRF = parseFloat(
            salario * tabelaIRRF.faixa05.aliquota -
                tabelaIRRF.faixa05.parcela_deduzir
        );
        aliquotaIRRF = parseFloat(tabelaIRRF.faixa05.aliquota * 100);
    }

    // Retorna a dedução e a alíquota do IRRF, arredondada para duas casas decimais.
    return {
        valor: deducaoIRRF,
        aliquotaIRRF: aliquotaIRRF,
    };
}

function calculadoraDeducoes(
    salario,
    dependentes,
    pensaoAlimenticia,
    previdenciaPrivada,
    outrosDescontos
) {
    // Calcula a dedução do INSS.
    let deducaoINSS = calculaDeducaoINSS(salario);

    // Calcula a dedução por dependentes.
    let deducaoDependentes = calculoDependentes(dependentes);

    //  Salário base para cálculo do IRRF.
    let salarioBaseIRRF =
        salario -
        deducaoINSS.valor -
        deducaoDependentes -
        pensaoAlimenticia -
        previdenciaPrivada;

    // Calcula a dedução do IRRF.
    let deducaoIRRF = calculaDeducaoIRPF(salarioBaseIRRF);

    // Calcula o valor total deduzido.
    let valorTotalDeduzido = parseFloat(
        deducaoINSS.valor +
            deducaoIRRF.valor +
            pensaoAlimenticia +
            previdenciaPrivada +
            outrosDescontos
    );

    // Calcula o salário líquido.
    let salarioLiquido = parseFloat(salario - valorTotalDeduzido);

    // Retorna o salário líquido, arredondado para duas casas decimais.
    return {
        salarioLiquido: salarioLiquido,
        deducaoINSS: deducaoINSS.valor,
        alicotaINSS: deducaoINSS.aliquotaINSS,
        deducaoIRRF: deducaoIRRF.valor,
        aliquotaIRRF: deducaoIRRF.aliquotaIRRF,
        pensaoAlimenticia: pensaoAlimenticia,
        previdenciaPrivada: previdenciaPrivada,
        outrosDescontos: outrosDescontos,
        totalDeduzido: valorTotalDeduzido,
    };
}

function showElement(element) {
    // Mostra um elemento.
    element.style.display = 'block';
}

function getData() {
    // Coletando os valores do formulário.
    let salarioBruto = parseFloat(
        document
            .getElementById('salario-bruto')
            .value.replace('R$ ', '')
            .replace(/[.]/g, '')
            .replace(',', '.')
    );
    let dependentes = parseFloat(
        document
            .getElementById('numero-dependentes')
            .value.replace('R$ ', '')
            .replace(/[.]/g, '')
            .replace(',', '.')
    );
    let pensaoAlimenticia = parseFloat(
        document
            .getElementById('valor-pensao')
            .value.replace('R$ ', '')
            .replace(/[.]/g, '')
            .replace(',', '.')
    );
    let previdenciaPrivada = parseFloat(
        document
            .getElementById('previdencia-privada')
            .value.replace('R$ ', '')
            .replace(/[.]/g, '')
            .replace(',', '.')
    );
    let outrosDescontos = parseFloat(
        document
            .getElementById('outros-valores')
            .value.replace('R$ ', '')
            .replace(/[.]/g, '')
            .replace(',', '.')
    );

    // Calcula o salário líquido.
    let deducoes = calculadoraDeducoes(
        salarioBruto,
        dependentes,
        pensaoAlimenticia,
        previdenciaPrivada,
        outrosDescontos
    );

    // Calcula o valor total a ser deduzido.

    // Exibe o resultado.
    document.getElementById(
        'resultado-salario-bruto'
    ).innerHTML = `R$ ${salarioBruto.toFixed(2)}`;
    document.getElementById(
        'resultado-pensão-alimenticia'
    ).innerHTML = `R$ ${pensaoAlimenticia.toFixed(2)}`;
    document.getElementById(
        'resultado-previdencia-privada'
    ).innerHTML = `R$ ${previdenciaPrivada.toFixed(2)}`;
    document.getElementById(
        'resultado-outros-descontos'
    ).innerHTML = `R$ ${outrosDescontos.toFixed(2)}`;
    document.getElementById(
        'resultado-deducao-inss'
    ).innerHTML = `R$ ${deducoes.deducaoINSS.toFixed(2)}`;
    document.getElementById(
        'resultado-deducao-irrf'
    ).innerHTML = `R$ ${deducoes.deducaoIRRF.toFixed(2)}`;
    document.getElementById(
        'total-deducao'
    ).innerHTML = `R$ ${deducoes.totalDeduzido.toFixed(2)}`;
    document.getElementById(
        'salario-liquido'
    ).innerHTML = `R$ ${deducoes.salarioLiquido.toFixed(2)}`;

    // If deducoes.valor === 828.39 mostra a mensagem
    if (deducoes.alicotaINSS) {
        document.getElementById(
            'alicota-inss'
        ).innerHTML = `${deducoes.alicotaINSS.toFixed(1)}%`;
    } else {
        document.getElementById('alicota-inss').innerHTML = `R$ 828,39`;
    }

    document.getElementById(
        'alicota-irrf'
    ).innerHTML = `R$ ${deducoes.aliquotaIRRF.toFixed(1)}%`;

    showElement(document.getElementById('resultado'));
    showElement(document.getElementById('alicotas'));
}

// Evento de click do botão.
document.getElementById('button-calcular').addEventListener('click', getData);
