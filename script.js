const integrantes = [
    { nombre: 'Alan',    foto: 'img/alan.png',   pagina: 'paginas/alan.html'    },
    { nombre: 'Mariana', foto: 'img/mar.png',    pagina: 'paginas/mariana.html' },
    { nombre: 'Ian',     foto: 'img/ian.png',    pagina: 'paginas/ian.html'     },
    { nombre: 'Ale',     foto: 'img/ale.png',    pagina: 'paginas/ale.html'     },
    { nombre: 'Franco',  foto: 'img/franco.png', pagina: 'paginas/franco.html'  },
];

const enlacesNav = [
    { etiqueta: 'Contacto', icono: 'bx-envelope',   url: 'https://directorio.uaq.mx/index.php/coordinaciones' },
    { etiqueta: 'Nosotros', icono: 'bx-info-circle', url: 'https://www.uaq.mx/index.php/conocenos/presentacion' },
    { etiqueta: 'Servicio', icono: 'bx-server',      url: 'https://www.uaq.mx/informatica/' },
];

const menu = document.getElementById('menuDesplegable');
const boton = document.getElementById('botonMenu');

enlacesNav.forEach(({ etiqueta, icono, url }) => {
    menu.innerHTML += `<a href="${url}" target="_blank" class="item-menu"><i class='bx ${icono}'></i>${etiqueta}</a>`;
});

boton.onclick = () => {
    menu.classList.toggle('abierto');
    boton.classList.toggle('activo');
};

const cuadricula = document.getElementById('cuadriculaIntegrantes');

integrantes.forEach(({ nombre, foto, pagina }) => {
    cuadricula.innerHTML += `
        <div class="tarjeta-integrante" onclick="location.href='${pagina}'">
            <div class="foto-integrante">
                <img src="${foto}" alt="${nombre}" onerror="this.style.display='none';this.parentElement.classList.add('sin-foto');this.parentElement.setAttribute('data-inicial','${nombre[0]}')">
            </div>
            <div class="info-integrante">
                <span class="nombre-integrante">${nombre}</span>
                <span class="enlace-perfil">Ver perfil <i class='bx bx-arrow-back bx-rotate-180'></i></span>
            </div>
        </div>`;
});

document.getElementById('btnVerServicios').onclick = () => {
    document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' });
};