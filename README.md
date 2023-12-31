# segundaEntregaPF-backend

## Descripción 

Este proyecto se puede ejecutar desde la carpeta "segundaEntregaPF" utilizando el comando `npm start`.



## Instalación 💻

Sigue los siguientes pasos para instalar y configurar el proyecto en tu entorno:

1. Descarga la carpeta "segundaEntregaPF" a tu computadora.

2. Abre una terminal y navega hasta la carpeta "segundaEntregaPF".

3. Ejecuta el siguiente comando para instalar las dependencias del proyecto:

   ```shell
   npm install

## Uso 🎯

Para ejecutar el proyecto, sigue estos pasos:

1. Abre la terminal y navega hasta la carpeta "segundaEntregaPF".

2. Ejecuta el siguiente comando:

   ```shell
   npm start
Desde tu navegador, podrás acceder a las siguientes rutas:

🌐 localhost:8080/products: En esta ruta se mostrarán todos los productos disponibles hasta el momento, los cuales están almacenados en la base de datos.
GET: http://localhost:8080/api/products/?page=2&limit=1
- utiliza esta ruta para visualizar en la pagina los productos disponibles, modificando los parametros limit( limite de productos) sort (asc o desc) para ordenarlos descecndente o ascendente segun precio y query () indicando la categoria del producto (como aún no se han implementado categorias de productos este ultimo parametro no es útil actualmente)

🌐 localhost:8080/cart: En esta ruta se podrán visualizar los productos disponibles en el carrito.

Para modificar, agregar o eliminar productos, puedes utilizar las siguientes peticiones con sus respectivas rutas desde Postman:

POST: http://localhost:8080/api/carts/ - Utiliza esta ruta para agregar un nuevo carrito a la base de datos.


GET: http://localhost:8080/api/carts/64bc54a3bfa63e840be9f662 - Utiliza esta ruta para obtener los datos de un carrito específico. Debes proporcionar el ID del carrito que deseas actualizar en la URL de la solicitud. 

POST: http://localhost:8080/api/carts/64bc54a3bfa63e840be9f662/product/64b0ab776250681977c720aa - Utiliza esta ruta para agregar un nuevo producto a un carrito determinado. Los parametros de la solicitud son el Id del carrito y el id del producto. (obs el producto debe pertenecer a la lista de productos disponibles en la base de datos)

DELETE: http://localhost:8080/api/carts/64bc54a3bfa63e840be9f662/product/64b0ab776250681977c720aa - Utiliza esta ruta para eliminar un producto específico del carrito. Debes proporcionar el ID del producto que deseas eliminar en la URL de la solicitud.


PUT: http://localhost:8080/api/carts/64bc54a3bfa63e840be9f662 - Utiliza esta ruta para agregar un arreglo de productos a un carrito determinado. Desde el body de la solicitud se envía un arreglo de productos los cuales serán agregados al carrito con el Id propodcionado en la ruta. Ej body de solicitud:

```json
    [{
"status":"success",
"payload": {
    
    "_id":"64b5cc454ab44bd653bb4caf",
    "title":"",
    "description":"",
    "code":"",
    "price":200,
    "status":true,
    "stock":200,
    "category":"",
    "thumbnail":""
},
"totalPages": 1,
"prevPage": null,
"nextPage": null,
"page": 1,
"hasPrevPage": "false",
"hasNextPage": "false",
"prevLink": null,
"nextLink": null
},{
"status":"success",
"payload": {
    
    "_id":"64b0ab776250681977c720aa",
    "title":"",
    "description":"",
    "code":"",
    "price":200,
    "status":true,
    "stock":200,
    "category":"",
    "thumbnail":""
},
"totalPages": 1,
"prevPage": null,
"nextPage": null,
"page": 1,
"hasPrevPage": "false",
"hasNextPage": "false",
"prevLink": null,
"nextLink": null
}]
```

PUT: http://localhost:8080/api/carts/64bc54a3bfa63e840be9f662/products/64b5cc454ab44bd653bb4caf - Utiliza esta ruta para modificar la cantidad de un producto determinado dentro del carrito desde el body de la request se envía el parametro "cantidad" por la cual se cambiará en el carrito. 
Ej de body: 
```json
    {"cantidad" : 10 }
```

DELETE: http://localhost:8080/api/carts/64bc54a3bfa63e840be9f662 - Utiliza esta ruta para eliminar todos los productos del carrito. Debes proporcionar el ID del carrito que deseas vaciar en la URL de la solicitud. 



## Autor ✍️

Este proyecto fue creado por Ignacio Wainer.
