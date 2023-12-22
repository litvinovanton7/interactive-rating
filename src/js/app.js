"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll(".btn");
    const btnSubmit = document.querySelector(".btn__submit");
    const wrapperGrade = document.querySelector(".wrapper__grade");
    const wrapperThanks = document.querySelector(".wrapper__thank");

    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const target = e.target;

            if (target && !target.classList.contains("grey")) {
                btn.classList.add("grey");
            } else {
                btn.classList.remove("grey");
            }
        });
    });

    btnSubmit.addEventListener("click", () => {
        btns.forEach((btn) => {
            if (btn.classList.contains("grey")) {
                wrapperThanks.style.display = "block";
                wrapperGrade.style.display = "none";
            } else {
                shakeBlock();
            }
        });
    });

    function shakeBlock() {
        const block = document.querySelector(".wrapper__grade");
        const duration = 1000;
        const startTime = new Date().getTime();

        function update() {
            const currentTime = new Date().getTime();
            const elapsed = currentTime - startTime;

            if (elapsed < duration) {
                const randomX = Math.random() * 15 - 5;
                const randomY = Math.random() * 15 - 5;

                block.style.transform =
                    "translate(" + randomX + "px, " + randomY + "px)";
                requestAnimationFrame(update);
            } else {
                block.style.transform = "translate(0, 0)";
            }
        }

        update();
    }
});
