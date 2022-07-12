$(function () {

    // AutoNumeric.js with specific options being passed.
    salarioInput = new AutoNumeric('#salario', {
        currencySymbol: 'R$ ',
        decimalCharacter: ',',
        digitGroupSeparator: '.',
        minimumValue: 0,
        select: true
    });

    pensaoInput = new AutoNumeric('#pensao', {
        currencySymbol: 'R$ ',
        decimalCharacter: ',',
        digitGroupSeparator: '.',
        minimumValue: 0,
        select: true
    });

    previdenciaInput = new AutoNumeric('#previdencia', {
        currencySymbol: 'R$ ',
        decimalCharacter: ',',
        digitGroupSeparator: '.',
        minimumValue: 0,
        select: true
    });

    outrosInput = new AutoNumeric('#outros', {
        currencySymbol: 'R$ ',
        decimalCharacter: ',',
        digitGroupSeparator: '.',
        minimumValue: 0,
        select: true
    });
});
