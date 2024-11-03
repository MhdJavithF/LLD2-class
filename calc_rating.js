const starsRef = document.querySelector('.stars');
const rateRef = document.querySelector('h3 span');
const iconRef = document.querySelectorAll('.star i');

let rate = 0;

starsRef.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-star')) {
        const val = e.target.dataset.id;
        changeColor(val);
        rateRef.innerHTML = val
        rate = val;
    }
});

function changeColor(val) {
    iconRef.forEach((icon , indx) => {
        const curIndx = indx + 1;
        if(curIndx <= val) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        }
        else {
            icon.classList.add('fa-regular');
            icon.classList.remove('fa-solid');
        }
    });
}

starsRef.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('fa-star')) {
        const val = e.target.dataset.id;
        changeColor(val);
    }
});

starsRef.addEventListener('mouseleave', (e) => {
    changeColor(rate);
});