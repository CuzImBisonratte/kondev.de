const footer_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const footer = document.getElementById("footer");

        if (entry.isIntersecting) {
            footer.classList.add('footer-in-animation');
            return;
        }

        // We're not intersecting, so remove the class!
        footer.classList.remove('footer-in-animation');
    });
});

footer_observer.observe(document.getElementById("footer"));


const subfooter_observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const subfooter = document.getElementById("subfooter");

        if (entry.isIntersecting) {
            subfooter.classList.add('subfooter-in-animation');
            return;
        }

        // We're not intersecting, so remove the class!
        subfooter.classList.remove('subfooter-in-animation');
    });
});

subfooter_observer.observe(document.getElementById("subfooter"));