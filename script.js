// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog‘lanamiz.');
    this.reset();
});

// Hero Button Animation
document.getElementById('reserveBtn').addEventListener('click', function() {
    alert("Stol bron qilish uchun +998 (90) 123-45-67 raqamiga qo'ng'iroq qiling!");
});

// Mobile Menu Toggle (optional enhancement)
// You can add hamburger menu later if needed
