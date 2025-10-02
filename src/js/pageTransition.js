document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');

    const transitionLinks = document.querySelectorAll('a[href]');

    transitionLinks.forEach(link => {
        const url = link.getAttribute('href');

        if (!url || url.startsWith('#')) return;

        link.addEventListener('click', (e) => {
            e.preventDefault();

            // fade-out
            document.body.classList.remove('loaded');
            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = url;
            }, 400);
        });
    });
});
