function getScrollDestination(event) {
    const clickedButtonElement = event.target;
    const clickedButtonName = clickedButtonElement.getAttribute('name');

    let scrollDestination = null;

    switch (clickedButtonName) {
        case 'projects-button':
            scrollDestination = document.getElementsByName('projects')[0];
            break;
        case 'skills-button':
            scrollDestination = document.getElementsByName('skills')[0];
            break;
        case 'contact-button':
            scrollDestination = document.getElementsByName('contact')[0];
            break;
    }

    return scrollDestination;
}

const navButtons = document.getElementsByClassName('nav-buttons')[0];

navButtons.addEventListener('click', function(event) {
    const scrollDestination = getScrollDestination(event);

    scrollDestination.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
    });
});
