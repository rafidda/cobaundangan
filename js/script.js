document.addEventListener('DOMContentLoaded', function() {
    const openButton = document.getElementById('open-invitation');
    const cover = document.getElementById('cover');
    const mainContent = document.getElementById('main-content');

    if (openButton && cover && mainContent) {
        openButton.addEventListener('click', function() {
            cover.classList.add('exit');
            mainContent.classList.add('visible');

            setTimeout(function() {
                cover.style.display = 'none';
            }, 750);
        });
    }

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    document.querySelectorAll('.aos').forEach(function(element) {
        observer.observe(element);
    });
});
