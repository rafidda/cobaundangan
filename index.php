<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Undangan Pernikahan Diya & Arif</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <!-- YouTube Player -->
    <div id="youtube-player"></div>

    <!-- Landing Page / Cover -->
    <div id="cover" class="cover-section">
        <div class="cover-content">
            <h4>The Wedding Of</h4>
            <h1>Diya & Arif</h1>
            <p>Kepada Yth. Bapak/Ibu/Saudara/i</p>
            <p class="guest-name">Tamu Undangan</p> <!-- Default guest name -->
            <button id="open-invitation">Buka Undangan</button>
        </div>
    </div>

    <!-- Main Content -->
    <main id="main-content" class="hidden">

        <!-- Header Section -->
        <header class="header-section reveal-on-scroll">
            <h2>Diya Nur Mutiasari</h2>
            <h2>&</h2>
            <h2>Arif Rafinda Ramah</h2>
            <h4>Sabtu, 31 Mei 2026</h4>
        </header>

        <!-- Couple Section -->
        <section class="couple-section reveal-on-scroll">
            <p class="quote">"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang."<br>- Q.S. Ar-Rum: 21 -</p>
            <div class="couple-profile">
                <div class="profile">
                    <img src="img/foto_diya.jpg" alt="Diya Nur Mutiasari" class="profile-pic">
                    <h3>Diya Nur Mutiasari</h3>
                    <p>Putri dari Bapak Bonin & Ibu Nunung Nurhayati</p>
                </div>
                <div class="profile">
                    <img src="img/foto_arif.jpg" alt="Arif Rafinda Ramah" class="profile-pic">
                    <h3>Arif Rafinda Ramah</h3>
                    <p>Putra dari Bapak Budi Widodo & Ibu Yati</p>
                </div>
            </div>
        </section>

        <!-- Countdown Section -->
        <section class="countdown-section batik-bg reveal-on-scroll">
            <h3>Menuju Hari Bahagia</h3>
            <div id="countdown" class="countdown-timer">
                <div><span id="days">00</span> Hari</div>
                <div><span id="hours">00</span> Jam</div>
                <div><span id="minutes">00</span> Menit</div>
                <div><span id="seconds">00</span> Detik</div>
            </div>
        </section>

        <!-- Event Section -->
        <section class="event-section reveal-on-scroll">
            <h2>Detail Acara</h2>
            <div class="event-details">
                <div class="event-card">
                    <h3>Akad Nikah</h3>
                    <p><strong>Sabtu, 31 Mei 2026</strong></p>
                    <p>Pukul 09:00 WIB</p>
                    <p>Alamat: Bojonggede, Bogor, Jawa Barat</p>
                </div>
                <div class="event-card">
                    <h3>Resepsi</h3>
                    <p><strong>Sabtu, 31 Mei 2026</strong></p>
                    <p>Pukul 11:00 - 17:00 WIB</p>
                    <p>Alamat: Bojonggede, Bogor, Jawa Barat</p>
                </div>
            </div>
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31721.84632913933!2d106.76729705!3d-6.49901045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c3e1a8111c6d%3A0x3b9518c435de5838!2sBojonggede%2C%20Bogor%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1678886123456" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>

        <!-- Gallery Section -->
        <section class="gallery-section reveal-on-scroll">
            <h2>Galeri Kenangan</h2>
            <div class="photo-grid">
                <img src="img/gallery1.jpg" alt="Galeri 1">
                <img src="img/gallery2.jpg" alt="Galeri 2">
                <img src="img/gallery3.jpg" alt="Galeri 3">
                <img src="img/gallery4.jpg" alt="Galeri 4">
            </div>
        </section>

        <!-- RSVP Section -->
        <section class="rsvp-section batik-bg reveal-on-scroll">
            <h2>Konfirmasi Kehadiran</h2>
            <form id="rsvp-form">
                <input type="text" name="name" placeholder="Nama Anda" required>
                <select name="status" required>
                    <option value="">Apakah Anda akan hadir?</option>
                    <option value="Hadir">Ya, saya akan hadir</option>
                    <option value="Tidak Hadir">Maaf, tidak bisa hadir</option>
                </select>
                <button type="submit">Kirim Konfirmasi</button>
            </form>
            <p id="rsvp-response" class="form-response"></p>
        </section>

        <!-- Guestbook Section -->
        <section class="guestbook-section reveal-on-scroll">
            <h2>Buku Tamu</h2>
            <form id="guestbook-form">
                <input type="text" name="guest_name" placeholder="Nama Anda" required>
                <textarea name="message" placeholder="Tulis ucapan dan doa Anda..." required></textarea>
                <button type="submit">Kirim Ucapan</button>
            </form>
            <p id="guestbook-response" class="form-response"></p>
            <div class="guestbook-entries">
                <!-- Ucapan akan ditampilkan di sini -->
            </div>
        </section>

        <footer>
            <p>Terima kasih atas doa restu Anda.</p>
            <p>Diya & Arif</p>
        </footer>

    </main>

    <script src="https://www.youtube.com/iframe_api"></script>
    <script src="js/script.js"></script>
</body>
</html>