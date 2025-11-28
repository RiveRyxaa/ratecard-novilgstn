document.addEventListener('DOMContentLoaded', function() {
    // 1. Ambil elemen
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const icon = menuToggle ? menuToggle.querySelector('i') : null; // Cek jika menuToggle ada

    // Cek di console browser apakah elemen ditemukan
    if (!menuToggle) {
        console.error("Tombol .menu-toggle tidak ditemukan! Cek file HTML.");
        return;
    }

    // 2. Event Listener untuk Klik Tombol
    menuToggle.addEventListener('click', () => {
        // Toggle class active
        navLinks.classList.toggle('active');

        // Ubah ikon X dan Garis
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 3. Tutup menu saat link diklik
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if(icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 4. Efek Navbar Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});