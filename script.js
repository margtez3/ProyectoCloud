const enlacesNav = [
    { etiqueta: 'Contacto', icono: 'bx-envelope',   url: 'https://directorio.uaq.mx/index.php/coordinaciones' },
    { etiqueta: 'Nosotros', icono: 'bx-info-circle', url: 'https://www.uaq.mx/index.php/conocenos/presentacion' },
    { etiqueta: 'Servicio', icono: 'bx-server',      url: 'https://www.uaq.mx/informatica/' },
];

const integrantes = [
    { nombre: 'Alan',    foto: 'img/alan.png',   pagina: 'paginas/alan.html'    },
    { nombre: 'Mariana', foto: 'img/mar.png',    pagina: 'paginas/mariana.html' },
    { nombre: 'Ian',     foto: 'img/ian.png',    pagina: 'paginas/ian.html'     },
    { nombre: 'Ale',     foto: 'img/ale.png',    pagina: 'paginas/ale.html'     },
    { nombre: 'Franco',  foto: 'img/franco.png', pagina: 'paginas/franco.html'  },
];

const botonMenu = document.getElementById('botonMenu');
const menuDesplegable = document.getElementById('menuDesplegable');

enlacesNav.forEach(({ etiqueta, icono, url }) => {
    const enlace = document.createElement('a');
    enlace.href = url;
    enlace.target = '_blank';
    enlace.rel = 'noopener noreferrer';
    enlace.className = 'item-menu';
    enlace.innerHTML = `<i class='bx ${icono}'></i><span>${etiqueta}</span>`;
    menuDesplegable.appendChild(enlace);
});

botonMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    const estaAbierto = menuDesplegable.classList.toggle('abierto');
    botonMenu.classList.toggle('activo', estaAbierto);
});

document.addEventListener('click', () => cerrarMenu());
menuDesplegable.addEventListener('click', () => cerrarMenu());
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') cerrarMenu(); });

function cerrarMenu() {
    menuDesplegable.classList.remove('abierto');
    botonMenu.classList.remove('activo');
}

const cuadricula = document.getElementById('cuadriculaIntegrantes');

integrantes.forEach(({ nombre, foto, pagina }) => {
    const tarjeta = document.createElement('div');
    tarjeta.className = 'tarjeta-integrante';
    tarjeta.setAttribute('role', 'button');
    tarjeta.setAttribute('tabindex', '0');
    tarjeta.innerHTML = `
        <div class="foto-integrante">
            <img src="${foto}" alt="${nombre}"
                 onerror="this.style.display='none';this.parentElement.classList.add('sin-foto');this.parentElement.setAttribute('data-inicial','${nombre[0]}')">
        </div>
        <div class="info-integrante">
            <span class="nombre-integrante">${nombre}</span>
            <span class="enlace-perfil">Ver perfil <i class='bx bx-arrow-back bx-rotate-180'></i></span>
        </div>`;

    const irAPagina = () => window.location.href = pagina;
    tarjeta.addEventListener('click', irAPagina);
    tarjeta.addEventListener('keydown', (e) => { if (e.key === 'Enter') irAPagina(); });
    cuadricula.appendChild(tarjeta);
});

document.getElementById('btnVerServicios').addEventListener('click', () => {
    document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
});

const barraNav = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    barraNav.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.5)' : 'none';
});

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.style.opacity = '1';
            entrada.target.style.transform = 'translateY(0)';
            observador.unobserve(entrada.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.tarjeta-servicio, .item-galeria').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s, border-color 0.25s ease`;
    observador.observe(el);
});

requestAnimationFrame(() => {
    document.querySelectorAll('.tarjeta-integrante').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s, border-color 0.25s ease, box-shadow 0.25s ease`;
        observador.observe(el);
    });
});