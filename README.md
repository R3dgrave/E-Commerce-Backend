# E-Commerce Backend

Este es el backend del proyecto **E-Commerce**, desarrollado como parte de un proyecto de aprendizaje utilizando el stack **MEAN** (MongoDB, Express, Angular, Node.js). Este backend proporciona una API RESTful para manejar funcionalidades como la gestión de productos, usuarios, autenticación y pedidos.

---
## 🚀 Indice
1. Descripción del proyecto
2. Tecnologías utilizadas
3. Requisitos previos
4. Instalación y configuración
5. Endpoints disponibles
6. Autenticación y autorización
7. Despliegue
8. Enlaces útiles
9. Autor

## 🚀 Descripción

Este backend gestiona los productos, categorías, marcas, pedidos y usuarios a través de una API segura. Además, se incluye un sistema de autenticación basado en **JWT** para proteger las rutas de administración.

### Características principales:

- **Autenticación de usuarios** usando JWT.
- **Gestión de productos**: CRUD para productos.
- **Gestión de categorías y marcas**: CRUD para categorías y marcas.
- **Gestión de pedidos**: CRUD de pedidos y cambios de estado (e.g. Despachado, Enviado, Entregado).
- **Filtrado de productos**: Filtra productos por categorías y marcas.
- **Protección de rutas**: Acceso restringido a rutas de administrador.

---

## 🛠 Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript.
- **Express**: Framework de Node.js para manejar rutas y solicitudes HTTP.
- **MongoDB**: Base de datos NoSQL para almacenar los datos del sistema (productos, usuarios, pedidos, etc.).
- **Mongoose**: Librería para interactuar con MongoDB a través de un modelo de datos estructurado.
- **JWT**: JSON Web Tokens para la autenticación de usuarios y protección de rutas.

---

## ⚙ Requisitos previos

Asegúrate de tener lo siguiente antes de ejecutar el proyecto:

- **Node.js v18 o superior**: [Descargar Node.js](https://nodejs.org/)
- **MongoDB**: Puedes usar una instancia local de MongoDB o un servicio en la nube como [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

---

## 🛠 Instalación y configuración

Sigue estos pasos para configurar el backend de manera local.

### 1️⃣ Clonar el repositorio

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/R3dgrave/E-Commerce-Backend.git
cd E-Commerce-Backend
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto y agrega las siguientes variables de entorno:
```bash
MONGODB_URL=mongodb://localhost:27017/ecommerce_db  # O la URL de tu base de datos MongoDB
JWT_SECRET=tu_clave_secreta
PORT=5000
```

### 4️⃣ Ejecutar el proyecto localmente
```bash
npm start
```
---
## 🧑‍💻 Endpoints disponibles
1️⃣ Autenticación
- POST /auth/login: Inicia sesión de usuario.
- POST /auth/register: Registra un nuevo usuario.

2️⃣ Productos
- GET /product: Obtiene todos los productos.
- POST /product: Crea un nuevo producto (requiere autenticación de administrador).
- GET /product/:id: Obtiene un producto por ID.
- PUT /product/:id: Actualiza un producto por ID (requiere autenticación de administrador).
- DELETE /products/:id: Elimina un producto por ID (requiere autenticación de administrador).

3️⃣ Categorías
- GET /category: Obtiene todas las categorías.
- POST /category: Crea una nueva categoría (requiere autenticación de administrador).
- GET /category/:id: Obtiene una categoría por ID.
- PUT /category/:id: Actualiza una categoría por ID (requiere autenticación de administrador).
- DELETE /category/:id: Elimina una categoría por ID (requiere autenticación de administrador).

4️⃣ Marcas
- GET /brand: Obtiene todas las marcas.
- POST /brand: Crea una nueva marca (requiere autenticación de administrador).
- GET /brand/:id: Obtiene una marca por ID.
- PUT /brand/:id: Actualiza una marca por ID (requiere autenticación de administrador).
- DELETE /brand/:id: Elimina una marca por ID (requiere autenticación de administrador).

5️⃣ Pedidos
- GET /orders: Obtiene todos los pedidos (requiere autenticación de administrador).
- POST /orders: Crea un nuevo pedido.
- GET /orders/:id: Obtiene un pedido por ID.
- PUT /orders/:id: Actualiza el estado de un pedido (requiere autenticación de administrador).

---
🔐 Autenticación y autorización
- La autenticación se maneja a través de JWT. Para obtener un token, los usuarios deben iniciar sesión a través del endpoint /auth/login. Este token debe ser enviado en el encabezado Authorization como Bearer <token> para acceder a las rutas protegidas (por ejemplo, para crear o modificar productos).

---
🌍 Despliegue
- Este backend está diseñado para ser desplegado en un entorno en la nube. Se puede usar servicios como Render, Heroku o AWS. Asegúrate de configurar correctamente las variables de entorno, especialmente la URL de la base de datos y el JWT Secreto.

---
🔗 Enlaces útiles
- Frontend del proyecto: E-Commerce Frontend
- Documentación de Node.js: https://nodejs.org/en/docs/
- Documentación de Express: https://expressjs.com/
- Documentación de MongoDB: https://www.mongodb.com/docs/
- Documentación de JWT: https://jwt.io/

---
👤 Autor
- Nombre: Diego Abanto Mendoza (R3dgrave)
- Email: r3dgrave98@gmail.com / diego.abantomendoza@gmail.com
- Portafolio: https://portafolio-diegoabanto.vercel.app/
