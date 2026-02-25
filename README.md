# ProyectoCloud

Resumen
-------
`ProyectoCloud` es una aplicación web estática construida con HTML, CSS y JavaScript (vanilla). Está diseñada como un sitio informativo y educativo con una página principal (`index.html`) y varias páginas secundarias en la carpeta `paginas/`. El proyecto está preparado para ser desplegado en hosting estático (GitHub Pages, Azure Static Web Apps) y puede adaptarse fácilmente a soluciones de hosting más completas.

Principales ventajas
--------------------
- Código ligero y sin dependencias externas.
- Estructura modular que facilita mantenimiento y ampliaciones.
- Preparado para despliegue automático con CI/CD.

Stack tecnológico
-----------------
- HTML5
- CSS3
- JavaScript (ECMAScript moderno, sin frameworks)

Estructura del repositorio
--------------------------
- `index.html` — Página principal.
- `script.js` — Script global.
- `img/` — Imágenes y recursos gráficos.
- `paginas/` — Páginas secundarias (alan, alejandro, franco, ian, mariana).
- `recursos/` — Hojas de estilo (`styles.css`, `ian.css`, `mar_styles.css`).

Instalación y ejecución local
----------------------------
Requisitos mínimos: `git` y un navegador moderno. Se recomienda utilizar un servidor local para probar rutas relativas y CORS.

Clonar el repositorio:

```bash
git clone <URL_DEL_REPO>
cd ProyectoCloud
```

Servir localmente (opciones recomendadas):

```bash
# Usando serve
npx serve .

# Usando http-server
npx http-server .
```

También es posible abrir `index.html` directamente en el navegador para pruebas simples, aunque el servidor local evita problemas con rutas relativas.

Uso y convenciones
-------------------
- Archivos HTML principales: `index.html` y los archivos dentro de `paginas/`.
- Estilos globales: `recursos/styles.css`.
- Scripts: `script.js` (global) y `paginas/mar_script.js` (ejemplo de script por página).

Despliegue
----------
El proyecto es estático — se recomiendan las siguientes opciones de despliegue según necesidades:

1) GitHub Pages

- Crear un repositorio en GitHub y subir el proyecto:

```bash
git remote add origin https://github.com/USUARIO/REPO.git
git branch -M main
git push -u origin main
```

- En GitHub: `Settings → Pages` → `Source: main (root)`.
- URL resultante: `https://USUARIO.github.io/REPO/`.

2) Azure Static Web Apps (recomendado para despliegue estático con CI)

- En Azure Portal crear un recurso **Static Web App** y conectar el repositorio GitHub.
- Valores recomendados para el workflow:
  - App location: `/`
  - API location: (vacío si no hay backend)
  - Output location: `/`
- Azure generará un workflow de GitHub Actions que deployará automáticamente al hacer push.

3) Azure App Service (opción alternativa)

- Para despliegues rápidos con Azure CLI:

```bash
az login
az webapp up --name NOMBRE_APP --resource-group NOMBRE_RG --location eastus
```

- Nota: Para sitios estáticos conviene preferir Static Web Apps por coste y optimización.

CI/CD recomendado (GitHub Actions)
---------------------------------
Se recomienda usar GitHub Actions para integrar build y despliegue. Si usas Azure Static Web Apps, el propio servicio crea un workflow automático. Para GitHub Pages, un ejemplo simple de workflow (archivo: `.github/workflows/deploy.yml`) puede publicar la rama `main`.

Configuración y variables
-------------------------
- Esta aplicación no requiere variables de entorno por ser estática.
- Si integras APIs o claves, gestiona secretos mediante GitHub Secrets o Azure Key Vault; nunca incluyas credenciales en el repositorio.

Imágenes de referencia (Azure)
-----------------------------
Incluye aquí las capturas de pantalla o diagramas relacionados con el despliegue en Azure. Las imágenes no son obligatorias en el repositorio, pero se sugiere colocarlas en `docs/`.

- Azure Portal — Static Web App (placeholder):

![Azure Static Web Apps - Portal](docs/azure-staticwebapp-portal.png)

- Azure — Configuración de Workflow / GitHub Actions (placeholder):

![Azure GitHub Actions Workflow](docs/azure-github-actions.png)

- Azure — Diagnósticos y logs (placeholder):

![Azure App Service - Logs](docs/azure-appservice-logs.png)

Notas para imágenes
- Ruta sugerida: `docs/`.
- Formato recomendado: PNG o JPG.
- Tamaño sugerido: 1200×700 px para capturas; incluir descripciones breves en el pie de foto.

Seguridad y buenas prácticas
---------------------------
- No subir secretos o credenciales al repositorio.
- Usar HTTPS obligatorio en producción.
- Revisar cabeceras HTTP de seguridad si se añade un servidor (CSP, HSTS, X-Frame-Options).

Contribuciones
--------------
- Reportar issues para errores o propuestas de mejora.
- Workflow recomendado: fork → branch → pull request hacia `main`.

Licencia
--------
Incluye un archivo `LICENSE` con la licencia elegida (por ejemplo MIT). Si aún no se ha definido, indícalo en este apartado y añádelo al repo.

Contacto
-------
- Autor / Equipo: [Indicar nombre y correo aquí]

Historial de cambios (CHANGELOG breve)
-------------------------------------
- v1.0 — Creación inicial del proyecto y estructura base.

Apéndice: Ejemplo rápido de workflow para Azure Static Web Apps
-------------------------------------------------------------
Si conectas el repositorio a Azure Static Web Apps, Azure generará automáticamente un workflow similar a este (simplificado):

```yaml
# Ejemplo simplificado — Azure Static Web Apps
name: Azure Static Web Apps CI/CD
on:
  push:
    branches: [ main ]
jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: 'Deploy to Azure Static Web Apps'
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: 'upload'
          #### Ajustar rutas si no están en root ####
          app_location: "/"
          api_location: ""
          output_location: "/"
```

---
Este documento está pensado para ser el README principal del proyecto. Puedo generar además el archivo `.github/workflows/azure-static-web-apps.yml` completo, o crear la carpeta `docs/` con imágenes de ejemplo si quieres que lo haga ahora.

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
