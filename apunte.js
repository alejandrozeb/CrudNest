/* eslint-disable prettier/prettier */
/* controller -> service-> data access
                Datamodel
----comandos-------------
nest --version
nest --help
extencios vs----
eslinq
prettier
editorconfig
----instalcion----
npm i -g @nestjs/cli
npm --version
npm --help

---crear proyecto-----
nest new <<name>>
cd <<name>>
npm run start
se inicializa en el puerto 3000
----configuracion basica----------
.editorconfig
ayuda a usea el mismo standar
----typescript-------
uso de tipado en js
revisar repo de ts
----controladores----
se encargan de los request
manipulan validan los request
usamos protocolos http
get put post delete

los decoradores indican que comportamiento va a tener determinanda clase

@decorator
@get('new endpoint')

npm run start:dev en nest conc ada cambia refresaca el server(ndemon)
---rutas___________
en el decorador indicamos la ruta y el metodo http
example
@Get('nuevo')
@Post('data')

resuelve los / en rutas

recibir parametros

usa plurales para los endpoints
/tasks/{id}
/people/{id}
/user/{id}/tasks

@get(':id')
...(@param('id) id:string)

query
limit pagination


las rutas dinamicas deben ir primero y las dinamicas o con parametros segundas

-----Single responsability-----------------------
principio de unica responsabilidad
los metodos, endpoint, funciones, clases.
CLI de nest para crear controlladores

se puede crear un monton de cosas como controlladores, filter, clases, custom decorator.

nest g controller products

crea un carpeta products y registra en los modulos de app

podemos especificar la carpeta de uso con sus subcarpetas

nest g controller controllers/products

nest g controller controllers/products --flat
no crea las subcarpetas con --flat

cualquier endpoint en se llama con el nombre del controller.

----metodos en nest------
Post con el decorador
se envia por el cuerpo de request
@body

----codigos de estado--------------------
201 entidad creada
500 error interno

mozilla http responde status code

nest ya manipla los estados con los decoradores
pero tambien podemos editarlos
-------nest es anogstico-----
puede usar express u otro

-----servicios-----------------
servicis se conectan con dataaccess o data model
@injectable
inyeccion de dependencias a los controladores
nest g s services/product --flag

se crea los servicios
y se añade a providers


*/
