(function() {
    // Show Modals 

    // In Minutes (0.5 = 30 seconds)
    // let animStartTime = 4.33;
    let animStartTime = 0.1;
    let modalID = document.querySelector('#loaderModal'),
        slideOne = document.querySelector('[data-slide="1"]'),
        slideTwo = document.querySelector('[data-slide="2"]'),
        slideThree = document.querySelector('[data-slide="3"]'),
        slideFour = document.querySelector('[data-slide="4"]'),
        slideFive = document.querySelector('[data-slide="5"]'),
        slideSix = document.querySelector('[data-slide="6"]'),
        progress = document.querySelector(".c-progress"),
        progressWrapper = document.querySelector(".c-progress-bar");

    if (modalID) {
        setTimeout(() => {
            modalID.classList.add("active");
            animations();
        }, animStartTime * 60 * 1000);

        // Animations Function
        const animations = () => {
            // Start Time
            console.time();
            slideOne.classList.add('active');
            slideFive.classList.remove('active');
            setTimeout(() => {
                slideOne.classList.remove('active');
                slideTwo.classList.add('active');
                setTimeout(() => {
                    slideTwo.classList.remove('active');
                    slideThree.classList.add('active');
                    // Call Progress (Will take total 7 seconds, 5s animation + 2s wait time at 95 progress)
                    progress.classList.add('progress-start');
                    progressBar();
                    setTimeout(() => {
                        // alert("Animation bar stopped");
                        slideThree.classList.remove('active');
                        slideFour.classList.add('active');
                        setTimeout(() => {
                            slideFour.classList.remove('active');
                            slideFive.classList.add('active');
                            setTimeout(() => {
                                slideFive.classList.remove('active');
                                slideSix.classList.add('active');
                                setTimeout(() => {
                                    // End Time
                                    console.timeEnd();
                                    slideSix.classList.remove('active');
                                    modalID.classList.remove('active');
                                }, 3000);
                            }, 4000);
                        }, 4000);
                    }, 7000);
                }, 2000);
            }, 3000);

            // Progress Bar Function
            const progressBar = () => {
                let i = 0;
                let width = 1;
                if (i == 0) {
                    i = 1;
                    const frame = () => {
                        if (width >= 95) {
                            clearInterval(interval);
                            progressWrapper.classList.add('blink');
                            setTimeout(() => {
                                progressWrapper.classList.remove('blink');
                            }, 3000);
                            i = 0;
                        } else {
                            if (width >= 60) {}
                            width++;
                            progress.innerHTML = width + "%";
                        }
                    }
                    let interval = setInterval(frame, 5 * 1000 / 100);
                }
            }
        }
    }
})();