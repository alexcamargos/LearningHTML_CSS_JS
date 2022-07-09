/*
# -------------------------------------------------------------------------------------------------
#
# Name: app.js
# Version: 0.0.1
#
# Summary: IMERSÃO DEV_
#          AULA 1: VARIÁVEIS, OPERAÇÕES E MÉDIA
#
# Author: Alexsander Lopes Camargos
# Author-email: alcamargos@vivaldi.net
#
# License: MIT
#
# -------------------------------------------------------------------------------------------------
*/

const note01 = document.getElementById('note01');
const note01Value = document.getElementById('note01-value');

const note02 = document.getElementById('note02');
const note02Value = document.getElementById('note02-value');

const note03 = document.getElementById('note03');
const note03Value = document.getElementById('note03-value');

const note04 = document.getElementById('note04');
const note04Value = document.getElementById('note04-value');

const mediaText = document.getElementById('media');
const message = document.getElementById('message');

function updateNoteValue(element, value) {
    element.innerHTML = parseFloat(value.value);
}

function changeNoteValue(rangeID) {
    switch (rangeID) {
        case 'note01':
            updateNoteValue(note01Value, note01);
            break;
        case 'note02':
            updateNoteValue(note02Value, note02);
            break;
        case 'note03':
            updateNoteValue(note03Value, note03);
            break;
        case 'note04':
            updateNoteValue(note04Value, note04);
    }
}

function media() {
    let note1 = parseFloat(document.getElementById('note01').value);
    let note2 = parseFloat(document.getElementById('note02').value);
    let note3 = parseFloat(document.getElementById('note03').value);
    let note4 = parseFloat(document.getElementById('note04').value);

    let media = (note1 + note2 + note3 + note4) / 4;

    mediaText.innerHTML = `Média Final: ${media.toFixed(1)}`;

    message.innerHTML =
        media >= 7
            ? 'Parabéns você foi aprovado!'
            : 'Infelizmente você não foi aprovado!';
}
