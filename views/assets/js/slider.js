const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');
const container = document.getElementById('rowside2side');

const targetScrollAmount = window.innerWidth * 0.7; // 70% of viewport width

buttonRight.onclick = () => {
    container.scrollBy({ left: targetScrollAmount, behavior: 'smooth' });
};

buttonLeft.onclick = () => {
    container.scrollBy({ left: -targetScrollAmount, behavior: 'smooth' });
};
