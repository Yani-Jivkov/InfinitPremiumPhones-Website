document.querySelectorAll('.buy-btn').forEach(btn => {
    if (btn.getAttribute('href')) return; // leave links (black) alone
    btn.addEventListener('click', function() {
        const color = this.closest('.color-info').querySelector('h3').textContent || 'телефон';
        alert(`Отличен избор! Избрахте ${color}.\n\nСвържете се с нас на: +359877443041 за поръчки.`);
    });
});

window.addEventListener('load', function() {
    document.querySelectorAll('.color-card').forEach((card, index) => {
        card.style.animationDelay = (index * 0.1) + 's';
    });
});
