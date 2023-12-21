"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll('.btn');
    const btnSubmit = document.querySelector('.btn__submit');
    const wrapperGrade = document.querySelector('.wrapper__grade');
    const wrapperThanks = document.querySelector('.wrapper__thank');

    btns.forEach((btn) => {
        btn.addEventListener('click', e => {
            const target = e.target;

            if (target && !target.classList.contains('grey')) {
                btn.classList.add('grey');
            } else {
                btn.classList.remove('grey');
            }
        });
    });

    btnSubmit.addEventListener('click', e => {
        const target = e.target;

        btns.forEach(btn => {
            if (btn.classList.contains('grey')) {
                wrapperThanks.style.display = 'block';
                wrapperGrade.style.display = 'none';
            }
        });
    });
});
