const grid = document.getElementById('skillsGrid');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            const barras = entry.target.querySelectorAll('.barra');
            barras.forEach(function(barra) {
                barra.style.width = barra.dataset.w + '%';
            });
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

if (grid) {
    observer.observe(grid);
}






