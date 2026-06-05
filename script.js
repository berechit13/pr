let toastTimeout;
function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }

    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // 1. Scroll Animation with IntersectionObserver
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // use the viewport
        rootMargin: '0px',
        threshold: 0.15 // trigger when 15% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS animation
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // 2. Interactive Logo (Toast Message)
    const logo = document.getElementById('heroLogo');

    const messages = [
        "라마는 티베트어로 '영적인 스승'을 말합니다.",
        "꾸준함이 취미입니다.",
        "수상자가 아니라 시상자",
        "책을 꽤 많이 읽습니다.",
        "음치였지만 기타 강사",
        "영어바보였지만 영어 교사",
        "시인/수필가",
        "영어, 스페인어, 중국어 + a"
    ];

    if (logo) {
        logo.addEventListener('click', () => {
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            showToast(randomMsg);
        });
    }
});

// Copy Email Function
function copyEmail(button) {
    const email = 'berechit13@gmail.com';
    
    navigator.clipboard.writeText(email).then(() => {
        showToast('클립보드에 복사되었습니다.');
    }).catch(err => {
        console.error('Failed to copy email: ', err);
        showToast('복사 실패');
    });
}