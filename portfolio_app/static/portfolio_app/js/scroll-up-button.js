function isHighestPosition() {
    const currentPosition = window.scrollY;
    return !(currentPosition > 0);
}

const arrowUpElement = document.getElementsByName('arrow-up')[0];

arrowUpElement.addEventListener('click', function() {
    window.scrollTo(0, 0);
});

document.addEventListener('scroll', function() {
    if (isHighestPosition()) {
        arrowUpElement.classList.add('hidden');
    } else {
        arrowUpElement.classList.remove('hidden');
    }
});