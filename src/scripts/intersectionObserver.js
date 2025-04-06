window.addEventListener(
    "load",
    async function () {
        var options = {
            threshold: 0.5,
        };
        var isTableShown = false;

        var observerFadeIn = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        }, options);
        //Observer of the progress bar of languages
        var observerProgressIn = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !isTableShown) {
                    isTableShown = true;
                    for (
                        let i = 0;
                        i <
                        document.querySelectorAll(".language_progress").length;
                        i++
                    ) {
                        document
                            .querySelectorAll(".language_progress")
                            // eslint-disable-next-line no-unexpected-multiline
                            [i].classList.add("is-visible");
                    }
                }
            });
        }, options);
        await sleep(1000);
        observerFadeIn.observe(document.querySelector(".profile_description"));
        observerFadeIn.observe(document.querySelector(".projects_container"));
        observerProgressIn.observe(document.querySelector("#languages_table"));
    },
    false
);

function sleep(ms) {
    // eslint-disable-next-line no-undef
    return new Promise((resolve) => setTimeout(resolve, ms));
}
