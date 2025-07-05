// Navigasi antar halaman dengan animasi
const navLinks = document.querySelectorAll(".navbar a");
const pages = document.querySelectorAll(".page");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Hapus semua active
        navLinks.forEach(l => l.classList.remove("active"));
        pages.forEach(p => {
            p.classList.remove("active");
            // Reset scroll ke atas tiap ganti halaman
            p.scrollTop = 0;
        });

        // Tambah active ke yang dipilih
        link.classList.add("active");
        const target = link.getAttribute("data-page");
        const page = document.getElementById(target);
        if (page) {
            page.classList.add("active");
        }
    });
});

// Interaksi dengan chibi
const chibi = document.querySelector(".chibi-img");
if (chibi) {
    let pose = 1;
    chibi.style.transition = "transform 0.2s, opacity 0.3s";
    chibi.addEventListener("click", () => {
        // Fade out
        chibi.style.opacity = "0";
        setTimeout(() => {
            // Ganti gambar pose setelah fade out
            if (pose === 1) {
                chibi.src = "img/nia-chibi-pose2.png";
                pose = 2;
            } else {
                chibi.src = "img/nia-chibi.png";
                pose = 1;
            }
            // Fade in
            chibi.style.opacity = "1";
            // Animasi bounce
            chibi.style.transform = "scale(1.15) rotate(-12deg)";
            setTimeout(() => {
                chibi.style.transform = "";
            }, 200);
        }, 200); // waktu fade out
    });
}
// Interaktif: Skill popup
document.querySelectorAll('.skill-icon').forEach(icon => {
    icon.addEventListener('click', () => {
        // Tutup semua popup dulu
        document.querySelectorAll('.skill-popup').forEach(p => p.classList.remove('show'));

        // Tampilkan popup milik ikon yang diklik
        const popup = icon.querySelector('.skill-popup');
        if (popup) {
            popup.classList.add('show');

            // Sembunyikan otomatis setelah 2.5 detik
            clearTimeout(popup.timer);
            popup.timer = setTimeout(() => {
                popup.classList.remove('show');
            }, 2500);
        }
    });
});
