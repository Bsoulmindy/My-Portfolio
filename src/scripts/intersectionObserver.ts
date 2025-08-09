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
                    for (const elem of document.querySelectorAll(
                        ".performance-table-entry_progress"
                    )) {
                        elem.classList.add("is-visible");
                    }
                }
            });
        }, options);

        await sleep(1000);
        for (const selector of [".profile_description", "#projects"]) {
            const elem = document.querySelector(selector);
            if (elem) {
                observerFadeIn.observe(elem);
            }
        }
        for (const selector of ["#languages_table", "#domains_table"]) {
            const elem = document.querySelector(selector);
            if (elem) {
                observerProgressIn.observe(elem);
            }
        }
    },
    false
);

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
