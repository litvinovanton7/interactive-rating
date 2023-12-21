"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".btn");

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
});
