// Bron qilish tugmasi
document.getElementById('reserveBtn').addEventListener('click', function() {
    alert("Stol bron qilish uchun +998 (90) 123-45-67 raqamiga qo'ng'iroq qiling!");
});

// Scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});