# Prueba Técnica [Practicante] para la empresa Docmovi
 
## Tecnologías
Se utilizaron las siguientes tecnologías:
- Meteor (React y MongoDB)
- TailwindCSS

## Para ejecutar el proyecto

Primero, ingresar al directorio del proyecto:
### `cd .\prueba-practica-2021\`

Luego instalar las dependencias:

### `meteor npm install`

Finalmente ejecutar el proyecto en modo de desarrollo:

### `meteor run`

Abrir http://localhost:3000 para ver en el navegador.

## Testing

Para realizar el meteor test con mocha y chai (este es un test para la base de datos):

### `meteor test --driver-package meteortesting:mocha`

Para realizar el test con Jest (este es un test simple solo en el frontend):

### `meteor npm test`

