// Loading JS

(function() {
    // Show Modals 

    let modalLink = document.querySelector('[data-modal]'),
        modalID = document.querySelector('#loaderModal'),
        slideOne = document.querySelector('[data-slide="1"]'),
        slideTwo = document.querySelector('[data-slide="2"]'),
        slideThree = document.querySelector('[data-slide="3"]'),
        slideFour = document.querySelector('[data-slide="4"]'),
        slideFive = document.querySelector('[data-slide="5"]'),
        progress = document.querySelector(".progress");
    if (modalLink && modalID && slideOne && slideTwo && slideThree && slideFour && slideFive && progress) {
        modalLink.onclick = (el) => {
                let id = el.currentTarget.dataset.modal;
                document.querySelector("#" + id).classList.add("active");
                // Call Animations
                animations();
            }
            // Animations Function
        const animations = () => {
            // Start Time
            console.time();
            slideOne.classList.add('active');
            slideFive.classList.remove('active');
            progress.classList.remove('progress-red');
            progress.classList.add('progress-green');
            setTimeout(() => {
                slideOne.classList.remove('active');
                slideTwo.classList.add('active');
                setTimeout(() => {
                    slideTwo.classList.remove('active');
                    slideThree.classList.add('active');
                    // Call Progress (Will take total 5 seconds, 3s animation + 2s wait time at 95 progress)
                    progressBar();
                    setTimeout(() => {
                        slideThree.classList.remove('active');
                        slideFour.classList.add('active');
                        setTimeout(() => {
                            slideFour.classList.remove('active');
                            slideFive.classList.add('active');
                            setTimeout(() => {
                                // End Time
                                console.timeEnd();
                                slideFive.classList.remove('active');
                                modalID.classList.remove('active');
                            }, 2000);
                        }, 2000);
                    }, 5300);
                }, 1000);
            }, 3000);

            // Progress Bar Function
            const progressBar = () => {
                let i = 0;
                if (i == 0) {
                    i = 1;
                    let width = 1;
                    const frame = () => {
                        if (width >= 100) {
                            clearInterval(interval);
                            i = 0;
                        } else {
                            if (width >= 60) {
                                progress.classList.remove('progress-green');
                                progress.classList.add('progress-red');
                            }
                            if (width >= 94) {
                                clearInterval(interval);
                                setTimeout(() => {
                                    setInterval(frame, 3 * 1000 / 100);
                                }, 2000);
                            }
                            width++;
                            progress.style.width = width + "%";
                            progress.innerHTML = width + "%";
                        }
                    }
                    let interval = setInterval(frame, 3 * 1000 / 100);
                }
            }
        }
    }
})();