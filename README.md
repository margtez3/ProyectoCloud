# ProyectoCloud

Descripción profesional
----------------------
Aplicación web estática desarrollada con HTML, CSS y JavaScript. Proporciona una página principal (`index.html`) y varias páginas internas en la carpeta `paginas/`. Está pensada para desplegarse como sitio estático (GitHub Pages o Azure Static Web Apps) pero también puede hospedarse en Azure App Service o cualquier hosting estático.

**Características principales**
- Navegación entre páginas estáticas.
- Diseño responsivo con hojas de estilo en `recursos/`.
- JavaScript modular: `script.js` y scripts por página en `paginas/`.

Tecnologías
-----------
- HTML5
- CSS3
- JavaScript (vanilla)

Estructura del proyecto
-----------------------
- [index.html](index.html)
- [script.js](script.js)
- [img/](img/)
  - README.md
- [paginas/](paginas/)
  - alan.html
  - alejandro.html
  - franco.html
  - ian.html
  - mariana.html
  - mar_script.js
- [recursos/](recursos/)
  - ian.css
  - mar_styles.css
  - styles.css

Instalación y ejecución local
----------------------------
Requisitos: `git`, un navegador moderno. Para servir localmente (recomendado):

1. Clona el repositorio:

```
git clone <URL_DEL_REPO>
cd ProyectoCloud
```

2. Abrir directamente:
- Abrir `index.html` en el navegador (útil para pruebas rápidas).

3. Servidor local (recomendado):

Usando `npx serve`:

```
npx serve .

# o usando http-server
npx http-server .
```

Uso
---
- La página principal es [index.html](index.html). Las páginas complementarias están en la carpeta [paginas/](paginas/).
- Los estilos globales están en [recursos/styles.css](recursos/styles.css) y los estilos por autor en `recursos/`.
- Los scripts principales: `script.js` y `paginas/mar_script.js`.

Despliegue
---------
El proyecto es una aplicación estática; las opciones de despliegue recomendadas son GitHub Pages y Azure Static Web Apps. También incluimos instrucciones para Azure App Service (opción general).

1) GitHub Pages (sitio estático)

- Crear un repositorio en GitHub y pushear el código:

```
git remote add origin https://github.com/USUARIO/REPO.git
git branch -M main
git push -u origin main
```

- En el repositorio de GitHub: Settings → Pages → Source: seleccionar `main` y carpeta `/ (root)`.
- Tras unos segundos tu sitio estará disponible en `https://USUARIO.github.io/REPO/`.

2) Azure Static Web Apps (recomendado para funcionalidades estáticas y CI automático)

- En el portal de Azure, crea un recurso **Static Web App** y conéctalo a tu repositorio GitHub.
- Configura los valores del workflow:
  - App location: `/`
  - Api location: (vacío si no hay backend)
  - Output location: `/`
- Azure generará un workflow de GitHub Actions que despliega automáticamente al hacer push.

3) Azure App Service (opción alternativa)

- Requiere Azure CLI. Puedes desplegar por `zip` o usando `az webapp up` para aplicaciones simples:

```
az login
az webapp up --name NOMBRE_APP --resource-group NOMBRE_RG --location eastus
```

- Para sitios estáticos, preferir Azure Static Web Apps por coste y optimización.

CI/CD con GitHub Actions
------------------------
- Para despliegue a GitHub Pages puedes añadir un workflow que construya y publique la carpeta raíz. Alternativamente, usa el flujo automático creado por Azure Static Web Apps cuando conectas el repo.

Variables de entorno y configuración
----------------------------------
- Esta aplicación no requiere variables de entorno por ser estática. Si añades claves (APIs), usa secretos de GitHub o Azure Key Vault y no los incluyas en el repo.

Buenas prácticas y seguridad
---------------------------
- No incluyas credenciales en el repositorio.
- Habilita HTTPS en el hosting (GitHub Pages y Azure lo ofrecen por defecto).
- Revisa las cabeceras de seguridad si añades un servidor (Content-Security-Policy, X-Frame-Options, etc.).

Contribución
------------
- Abrir issues para bugs o mejoras.
- Usar pull requests en la rama `main` con descripciones claras.

Licencia
--------
- Añade la licencia que prefieras (p. ej. MIT). Si no se ha definido, indícalo aquí y añade un archivo `LICENSE`.

Contacto
-------
- Autor / Equipo: indicar nombre y correo de contacto en este apartado.

Archivos relevantes
------------------
- Página principal: [index.html](index.html)
- Scripts: [script.js](script.js), [paginas/mar_script.js](paginas/mar_script.js)
- Estilos: [recursos/styles.css](recursos/styles.css)

Notas finales
------------
Este README ofrece una guía práctica para instalar, usar y desplegar la aplicación. Puedo adaptar las instrucciones a un flujo CI/CD concreto (GitHub Actions completo, Azure Pipelines) si lo deseas.
