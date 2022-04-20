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
        progress = document.querySelector(".progress"),
        progressWrapper = document.querySelector(".progress-bar");

    if (modalLink && modalID && slideOne && slideThree && slideFour && slideFive && progress) {
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
            // progress.classList.remove('progress-red');
            // progress.classList.add('progress-green');
            setTimeout(() => {
                slideOne.classList.remove('active');
                slideTwo.classList.add('active');
                setTimeout(() => {
                    slideTwo.classList.remove('active');
                    slideThree.classList.add('active');
                    // Call Progress (Will take total 5 seconds, 3s animation + 2s wait time at 95 progress)
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
                                // End Time
                                console.timeEnd();
                                slideFive.classList.remove('active');
                                modalID.classList.remove('active');
                            }, 2000);
                        }, 2000);
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
                            if (width >= 60) {
                                // progress.classList.remove('progress-green');
                                // progress.classList.add('progress-red');
                            }
                            width++;
                            // progress.style.width = width + "%";
                            progress.innerHTML = width + "%";
                        }
                    }
                    let interval = setInterval(frame, 5 * 1000 / 100);
                }
            }
        }
    }
})();