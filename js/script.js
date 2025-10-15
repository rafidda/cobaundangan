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
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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
        // Player siap, bisa ditambahkan logic jika perlu
    }

    // 2. Open Invitation
    openButton.addEventListener('click', () => {
        // 1. Animasikan cover keluar
        cover.classList.add('exit');

        // 2. Tampilkan konten utama
        mainContent.classList.remove('hidden');

        // 3. Scroll behavior is now manual. The user will scroll down on their own.


        // 4. Sembunyikan cover setelah animasi selesai (1s sesuai CSS)
        setTimeout(() => {
            cover.style.display = 'none';
        }, 1000);

        // 5. Putar musik
        if (player && typeof player.playVideo === 'function') {
            player.playVideo();
        }
        
        // 6. Muat buku tamu
        loadGuestbook();
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

    // 4. RSVP Form Submission
    const rsvpForm = document.getElementById('rsvp-form');
    if(rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(rsvpForm);
            const responseElement = document.getElementById('rsvp-response');

            fetch('save_rsvp.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(result => {
                responseElement.textContent = result.message || 'Terima kasih atas konfirmasi Anda!';
                responseElement.style.color = '#2E7D32';
                rsvpForm.reset();
            })
            .catch(error => {
                responseElement.textContent = 'Terjadi kesalahan. Silakan coba lagi.';
                responseElement.style.color = 'red';
            });
        });
    }

    // 5. Guestbook Form Submission
    const guestbookForm = document.getElementById('guestbook-form');
    if(guestbookForm) {
        guestbookForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(guestbookForm);
            const responseElement = document.getElementById('guestbook-response');

            fetch('save_guestbook.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(result => {
                responseElement.textContent = result.message || 'Ucapan berhasil dikirim!';
                responseElement.style.color = '#2E7D32';
                guestbookForm.reset();
                loadGuestbook(); // Refresh guestbook
            })
            .catch(error => {
                responseElement.textContent = 'Terjadi kesalahan. Silakan coba lagi.';
                responseElement.style.color = 'red';
            });
        });
    }

    // 6. Load Guestbook Entries
    function loadGuestbook() {
        fetch('get_guestbook.php')
            .then(response => response.json())
            .then(data => {
                const entriesContainer = document.querySelector('.guestbook-entries');
                if (!entriesContainer) return;
                entriesContainer.innerHTML = ''; // Clear
                if (data.length === 0) {
                    entriesContainer.innerHTML = '<p>Belum ada ucapan.</p>';
                    return;
                }
                data.forEach(entry => {
                    const entryDiv = document.createElement('div');
                    entryDiv.className = 'guestbook-entry';
                    entryDiv.innerHTML = `<strong>${escapeHTML(entry.guest_name)}</strong><p>${escapeHTML(entry.message)}</p>`;
                    entriesContainer.appendChild(entryDiv);
                });
            })
            .catch(error => {
                const entriesContainer = document.querySelector('.guestbook-entries');
                if(entriesContainer) entriesContainer.innerHTML = '<p>Gagal memuat ucapan.</p>';
            });
    }

    function escapeHTML(str) {
        return str.replace(/[&<>"']/g, function (tag) {
            const chars = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            };
            return chars[tag] || tag;
        });
    }

    // 7. Scroll Reveal Animation
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