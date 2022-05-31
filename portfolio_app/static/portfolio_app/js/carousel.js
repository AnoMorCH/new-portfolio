function changeSelectedIndicator(indicator) {
    document.querySelector('.controls .selected').classList.remove('selected');
    indicator.classList.add('selected');
}

function scrollSlide() {
    slider.style.transform = `translate(${-sliderScrollStep * sectionIndex}%)`;
}

const slider = document.querySelector('.slider');
const childrenSliderLength = slider.children.length;
const pageWidth = 100;
const sliderScrollStep = pageWidth / childrenSliderLength;

/* Setting width of slider to make scroll */
slider.style.width = `${childrenSliderLength * pageWidth}%`;

const controls = document.querySelector('.controls');
const indicatorParents = controls.querySelector('.controls ul');
const leftArrow = controls.querySelector('.left');
const rightArrow = controls.querySelector('.right');

let sectionIndex = 0;

document.querySelectorAll('.controls li').forEach(function (indicator, index) {
    indicator.addEventListener('click', function () {
        sectionIndex = index;
        changeSelectedIndicator(indicator);
        scrollSlide();
    });
});

rightArrow.addEventListener('click', function () {
    if (sectionIndex < childrenSliderLength - 1) {
        sectionIndex += 1;
    }

    changeSelectedIndicator(indicatorParents.children[sectionIndex]);

    scrollSlide();
});

leftArrow.addEventListener('click', function () {
    if (sectionIndex > 0) {
        sectionIndex -= 1;
    }

    changeSelectedIndicator(indicatorParents.children[sectionIndex]);

    scrollSlide();
});