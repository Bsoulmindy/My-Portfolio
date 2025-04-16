window.addEventListener(
    "load",
    async function () {
        const options = {
            threshold: 0.5,
        };
        let isTableShown = false;

        const observerFadeIn = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                }
            });
        }, options);
        //Observer of the progress bar of languages
        const observerProgressIn = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting && !isTableShown) {
                    isTableShown = true;
                    for (
                        let i = 0;
                        i <
                        document.querySelectorAll(
                            ".performance-table-entry_progress"
                        ).length;
                        i++
                    ) {
                        document
                            .querySelectorAll(
                                ".performance-table-entry_progress"
                            )
                            // eslint-disable-next-line no-unexpected-multiline
                            [i].classList.add("is-visible");
                    }
                }
            });
        }, options);
        await sleep(1000);
        observerFadeIn.observe(document.querySelector(".profile_description"));
        observerFadeIn.observe(document.querySelector("#projects"));
        observerProgressIn.observe(document.querySelector("#languages_table"));
        observerProgressIn.observe(document.querySelector("#domains_table"));
    },
    false
);

function sleep(ms) {
    // eslint-disable-next-line no-undef
    return new Promise((resolve) => setTimeout(resolve, ms));
}
