const observer = new IntersectionObserver(entries => {
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

observer.observe(document.getElementById("footer"));