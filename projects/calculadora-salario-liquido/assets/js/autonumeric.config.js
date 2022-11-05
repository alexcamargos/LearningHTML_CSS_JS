// -------------------------------------------------------------------------------------------------
// Name: autonumeric.config.js
// Version: 0.0.1
//
// Summary: Calculadora de Salário Líquido - Salário bruto x Salário Líquido
//
// Author: Alexsander Lopes Camargos
// Author-email: alcamargos@vivaldi.net
//
// License: MIT
// -------------------------------------------------------------------------------------------------

// Default options.
const autoNumericOptionsReal = {
    currencySymbol: 'R$ ',
    decimalCharacter: ',',
    digitGroupSeparator: '.',
    minimumValue: '0',
};

// Initialize AutoNumeric.
new AutoNumeric('#salario-bruto', autoNumericOptionsReal);
new AutoNumeric('#valor-pensao', autoNumericOptionsReal);
new AutoNumeric('#previdencia-privada', autoNumericOptionsReal);
new AutoNumeric('#outros-valores', autoNumericOptionsReal);
