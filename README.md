# Login con passport-jwt y express.

Para probar el proyecto generar un archivo .env con esta estructura:

```
PORT=
MONGO_URL=
COOKIE_SIGN=
JWT_PRIVATE_KEY=
JWT_EXPIRES_IN=

FRONTEND_URL=
FRONTEND_DEV_URL=
```

Escribir las variables segun corresponda, luego ejecutar en la carpeta raiz el comando nodemon ./src/app.js

> [!NOTE]
>
> Si se quiere probar desde un front con NextJs dejo este link al repositorio, clonar y probar con el backend corriendo en un puerto distinto al 3000
> [https://github.com/Dashcamed/pruebaloginfront](https://github.com/Dashcamed/pruebaloginfront "https://github.com/Dashcamed/pruebaloginfront")

> [!NOTE]
>
> Esta prueba usa una base de datos local de mongodb la cual es: mongodb://localhost:27017/
>
> Por lo que hay que registrar un usuario primero para probar la funcionalidad.
> Enviar por postman con metodo POST `http://localhost:8080/api/session`
>
> ```
> {
>     "first_name": "Juan",
>     "last_name": "Perez",
>     "email": "juanperez@gmail.com",
>     "age": 31,
>     "password": "12345678"
> }
> ```
>
> Luego probar el login metodo POST
> postman: `http://localhost:8080/api/session/login`
>
> ```
> {
>     "email": "juanperez@gmail.com",
>     "password": "12345678"
> }
> ```
>
> Para el logout con metodo POST
>
> postman: `http://localhost:8080/api/session/logout`
>
> Para el estado de la sesion probar:
> postman con metodo GET `http://localhost:8080/api/user/current`
