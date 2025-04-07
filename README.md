## Requisitos

- Tener instalado Node.js


## Estructura del Proyecto

```
TP1_backend_frontend/
│
├── backend/
│   └── server.js
│
├── frontend/
│   └── index.html
│   └── style.css
│   └── script.js
│
├── package.json
└── node_modules/
```

---

## Instrucciones para ejecutar el servidor

### 1. Clonar o copiar el proyecto en tu máquina

Si estás usando Git:

```bash
git clone [URL_DEL_REPOSITORIO]
cd TP1_backend_frontend
```

O si lo descargás como ZIP, descomprimilo y abrí la carpeta con tu terminal.

---

### 2. Instalar dependencias

En la raíz del proyecto (donde está el `package.json`), ejecutá:

```bash
npm install
```

Esto instalará `express` y `cors`.

---

### 3. Ejecutar el servidor

Desde la misma carpeta raíz, ejecutá:

```bash
node backend/server.js
```

Deberías ver en consola:

```
Servidor escuchando en el puerto 3000
```

---

### 4. Probar el backend directamente

Abrí un navegador y entrá a:

```
http://localhost:3000/saludo/TuNombre
```

Reemplazá `TuNombre` por lo que quieras.


## Usar el Frontend

1. Abrí el archivo `frontend/index.html` con doble clic.
2. Escribí tu nombre en el campo de texto.
3. Hacé clic en el botón "Saludar".
4. Se mostrará el mensaje devuelto por el servidor.

---

## Para detener el servidor

En la terminal donde corre el servidor, presioná:

```
Ctrl + C
```

---

