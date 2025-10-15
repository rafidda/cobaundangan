document.addEventListener('DOMContentLoaded', function() {

    const openButton = document.getElementById('open-invitation');
    const cover = document.getElementById('cover');
    const mainContent = document.getElementById('main-content');
    const guestNameEl = document.querySelector('.guest-name');
    let player; // YouTube player

    // 0. Set Guest Name from URL
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const guest = urlParams.get('to');
        if (guest && guestNameEl) {
            guestNameEl.textContent = guest.replace(/[_-]/g, ' ');
        }
    } catch (e) {
        console.error("Error parsing URL params:", e);
    }

    // 1. YouTube Player Initialization
    // The 'script' tag for the YouTube API is already in index.php, 
    // so we just need to define the ready function.
    window.onYouTubeIframeAPIReady = function() {
        try {
            player = new YT.Player('youtube-player', {
                height: '0',
                width: '0',
                videoId: '4x3n53-Qe1c', // Ganti dengan ID video YouTube Anda
                playerVars: {
                    'autoplay': 0,
                    'controls': 0,
                    'loop': 1,
                    'playlist': '4x3n53-Qe1c' // Diperlukan agar loop berfungsi
                },
                events: {
                    'onReady': onPlayerReady
                }
            });
        } catch (e) {
            console.error("Error initializing YouTube player:", e);
        }
    }

    function onPlayerReady(event) {
        // Player siap.
    }

    // 2. Open Invitation
    openButton.addEventListener('click', () => {
        // Animasikan cover keluar
        cover.classList.add('exit');

        // Tampilkan konten utama
        mainContent.classList.remove('hidden');

        // Sembunyikan cover setelah animasi selesai (1s sesuai CSS)
        setTimeout(() => {
            cover.style.display = 'none';
        }, 1000);

        // Putar musik
        if (player && typeof player.playVideo === 'function') {
            player.playVideo();
        }
    });

    // 3. Countdown Timer
    const countdownDate = new Date('May 31, 2026 09:00:00').getTime();
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerHTML = "<h4>Acara Telah Berlangsung</h4>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
    }, 1000);

    // 4. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

});
