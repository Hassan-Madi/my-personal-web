// منع إرسال الفورم وإظهار رسالة بسيطة
const form = document.querySelector('.contact-form');

if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('تم إرسال رسالتك بنجاح ✔');
        form.reset();
    });
}

// إضافة ميزة التمرير الناعم (Smooth Scroll) عند الضغط على الروابط
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if(this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

