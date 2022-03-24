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





*/
