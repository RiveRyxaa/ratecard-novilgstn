        document.addEventListener('DOMContentLoaded', function() {
            // --- 1. Logic Hamburger Menu ---
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            const icon = document.querySelector('.menu-toggle i');

            if(menuToggle) {
                menuToggle.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                    if (navLinks.classList.contains('active')) {
                        icon.classList.remove('fa-bars');
                        icon.classList.add('fa-times');
                    } else {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                });
            }

            document.querySelectorAll('.nav-links li a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                    if(icon) {
                        icon.classList.remove('fa-times');
                        icon.classList.add('fa-bars');
                    }
                });
            });

            // --- 2. Logic Scroll Reveal (Animasi Muncul) ---
            const sections = document.querySelectorAll('.stat-box, .price-card, .portfolio-item, .brand-item, h2');
            sections.forEach(sec => sec.classList.add('reveal'));

            window.addEventListener('scroll', reveal);

            function reveal() {
                var reveals = document.querySelectorAll('.reveal');
                for (var i = 0; i < reveals.length; i++) {
                    var windowHeight = window.innerHeight;
                    var elementTop = reveals[i].getBoundingClientRect().top;
                    var elementVisible = 50;

                    if (elementTop < windowHeight - elementVisible) {
                        reveals[i].classList.add('active');
                    }
                }
            }
            reveal(); // Panggil sekali saat load
        });
        // --- 3. Logic Pesan WhatsApp Otomatis ---
        function pesanWhatsApp(layanan, harga) {
            // GANTI NOMOR WA DI SINI (Contoh: 628123456789)
            const nomorWA = "6282140305590"; 

            // Format Pesan Otomatis
            const pesan = `Halo Kak Novi, saya tertarik untuk kerja sama.\n\nSaya ingin memesan paket:\n*${layanan}* seharga *${harga}*\n\nMohon info ketersediaan jadwalnya. Terima kasih!`;

            // Membuat Link WA
            const url = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

            // Buka WhatsApp di tab baru
            window.open(url, '_blank');
        }

        // --- 4. Logic Salin Nomor Rekening (Support Mobile) ---
        function copyRekening() {
            const textToCopy = "1921306470"; // Nomor Rekening
            const btnCopy = document.querySelector('.btn-copy');
            const icon = btnCopy.querySelector('i');
            const text = btnCopy.querySelector('.copy-text');

            // Cara Copy Modern (Bekerja di HP Android/iPhone)
            navigator.clipboard.writeText(textToCopy).then(() => {
                
                // Ubah Tampilan Tombol jadi "Berhasil"
                icon.classList.remove('fa-copy');
                icon.classList.add('fa-check'); // Ikon Check
                text.innerText = "Disalin!";
                btnCopy.style.background = "#25D366"; // Warna Hijau
                btnCopy.style.borderColor = "#25D366";

                // Kembalikan ke semula setelah 2 detik
                setTimeout(() => {
                    icon.classList.remove('fa-check');
                    icon.classList.add('fa-copy');
                    text.innerText = "Salin";
                    btnCopy.style.background = "rgba(255, 255, 255, 0.2)";
                    btnCopy.style.borderColor = "rgba(255, 255, 255, 0.3)";
                }, 2000);

            }).catch(err => {
                console.error('Gagal menyalin', err);
                alert("Gagal menyalin otomatis. Silakan salin manual.");
            });
        }

        // --- 5. Logic Typewriter Effect ---
        const textElement = document.querySelector('.typewriter');
        const words = ["Content Creator", "Beauty Enthusiast", "TikTok Influencer", "Brand Partner"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentWord = words[wordIndex];
            
            if (isDeleting) {
                textElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentWord.length) {
                isDeleting = true;
                setTimeout(type, 2000); // Tunggu 2 detik sebelum hapus
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(type, 500); // Tunggu sebentar sebelum ngetik kata baru
            } else {
                setTimeout(type, isDeleting ? 100 : 200); // Kecepatan ngetik
            }
        }
        
        // Jalankan efek ngetik jika elemen ada
        if(textElement) type();