# NodeJS
Practica con nodejs y explicaciones en conjunto para comprender
Se iran integrando comprensiones como comentarios conjunto a ejemplos sencillos para poder comprender mas a fondo como funciona cada cosa al igual que el funcionamiento

# Instalacion de paquetes

## Instalar 

`npm install <paquete>`

## Instalar y agregar a dependencias del package json

`npm install --save <paquete>`

## Instalar mas de un paquete en una instalacion

`npm install --save <PrimerPaquete> <SegundoPaquete>`

## Multiplicar Console App

Ubicado en la sección de 03-BASES-NODE

Es una aplicacion para generar archivos de tablas de multiplicar

### Commmands:

1. crear
2. listar

### Argumentos:

1. --limite
2. --base

### Alias:

1. -l < valor >
2. -b < valor >

### Pasos:

1. `npm install`
2. `node app.js crear --limite 5 --base 5`
2. Otra forma -> `node app < command > < Argumento o alias > < valor >`

> ej: `node app crear -l 10 -b 3`

## Lista de tareas Console App

Ubicado en la sección 04-POR-HACER

Es una aplicacion para poder crear una lista de tareas

### Commands:

1. crear
2. actualizar
3. eliminar

### Argumentos:

1. --descripcion
2. --estado

### Alias:

1. -d < valor >
2. -c < true o false >

### Pasos:

1. `npm install`
2. `node app Command argumento o alias valor`

> ej: `node app crear -d "Dormir"`
>> ej: `node app actualizar -d "Dormir" -c true `
>>> ej: `node app eliminar -d "Dormir"`

## Aplicacion del clima 

Ubicado en la sección 05-CLIMA-MUNDO

Es una aplicacion para poder obtener el clima por terminal

### Argumentos:

1. --direccion

### Alias:

1. -d "text"

### Pasos:

1. `npm install`

### Uso

`node app -d "lugar"`

> ej: node app -d "Santiago"
>> output: El clima de santiago, Chile es de 25 grados