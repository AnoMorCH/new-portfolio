function getInputMessageRemainingLength() {
    return maxLengthInputNameMessage - inputNameMessage.value.length;
}

function setInputMessageRemainingLength() {
    counterForInputNameMessage.innerHTML = getInputMessageRemainingLength();
}

const inputNameMessage = document.getElementsByName('message')[0];
const maxLengthInputNameMessage = inputNameMessage.getAttribute('maxlength');
const blockCounterForInputNameMessage = document.querySelector('.counter');
const counterForInputNameMessage = blockCounterForInputNameMessage.querySelector('span');

setInputMessageRemainingLength();
document.addEventListener('input', setInputMessageRemainingLength);