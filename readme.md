# Desarrollo Web Avanzado con Node.js

[TEMARIO](https://docs.google.com/presentation/d/1vRkyhw8AexTY_ie31c2whJZoHKmGFvXvzLzHroAfBO8/edit?usp=sharing)

1. Introducción a Node.js
   - Instalación y nvm
     - [Versiones](https://nodejs.org/es/about/releases/)
     - [repositorio de nvm para windows](https://github.com/coreybutler/nvm-windows)
     - Descargar release actual (1.1.8)
     - Instalar node lts (16.13.0)
   - Usando Node.js
     1. Ejecutar script básico
2. Características de Node.js y diferencias entre código bloqueante y no bloqueante
   1. \_\_filename
   2. \_\_dirname
   3. process.env
   4. process.argv
   5. ejemplo de código bloqueante
   6. ejemplo de código no bloqueante
3. Retos a resolver mediante esta tecnología
4. Exportación, instalación de NPM, dependencias, y versiones semánticas
   - Inicializar proyecto
     - Archivo package.json
     - Directorio node_modules
   - Modulos locales
     - Crear funciones básicas de calculadora
   - Paquetes de terceros
     - Instalar paquete colorette
     - Instalar paquete commander
       - Crear programa básico de suma
     - Instalación global
       - Instalar typescript
   - Paquetes locales
     - Crear directorio fuera del proyecto e inicializar
     - Crear paquete con ejecutable (cli) y biblioteca
     - Instalar paquete local
       - Usar librería en código
       - Usar cli en package.json
   - Tipos de instalación
     - Producción
     - Desarrollo
     - Global
   - NPX
5. Lectura de archivos y emisión de peticiones
6. Emisores de eventos, requests, y escuchas - Instalar express
7. Streams: problemas a resolver
8. Escritura, lectura, piping y solución de la concurrencia
9. Rutas, disposición visual, construcción de URL y servidores express
10. Escucha, emisión, respuesta a peticiones y almacenamiento de datos del cliente
11. Persistencia de información
12. Redis, trabajo con listas, persistencia, emisión, y otros aspectos
13. Trabajo en tiempo real con Node.js
14. Socket.io: la librería de sockets
