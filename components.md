# DATA LAYER

## Listado de recetas

### MODIFICACIONES:

- Crear una receta
- Borrar una receta
- Modificar una receta

## Usuarios logado o no usuarios

### MODIFICACIONES:

- Togglear usuario login/logout

## Interfaz de usuario

### MODIFICACIONES:

- Texto y tipo segun acción
- Visible / no visible

# COMPONENTS

## APP

- Muestra el conjunto de componentes descendientes directos de toda la aplicación.

- Guarda en el local storage el token del registro
- Setea en el store si usuario está logeado o no

## RECIPES LIST

- Muestra tantas recetas como reciba

## RECIPE CARD

- Muestra foto de la receta con su título. Y boton borrar o editar en caso que sean creadas por el usuario actual.

- Al clicar realiza la acción recibida

## RECIPE DETAIL

- Muestra:
  - Foto de la receta
  - Título de la receta
  - Ingredientes y cantidades
  - Pasos de la receta
  - Boton de lector de pantalla

## BUTTON

- Muestra un botón con su texto

- Al clickar, realiza la acción recibida

## FEEDBACK USER

- Muestra un texto y un tipo de feedback

## NAVIGATION

- Muestra links de nevegación en función de en que pagina se encuentre usuario, con las siguientes posibilidades:
  - Crea tu receta, Volver al inicio, Registrate, Iniciar sesión y Salir de la sesión

## FORM

- Muestra un formulario con una foto y un botón

- Al submitear enviar datos del formulario y enviar acción abrir feedback.

## REGISTER

- Muestra un formulario de registro y un botón de registrarse

- Al clickar botón enviar datos del formulario de registro y enviar la acción de abrir componente ui feedback

## LOGIN

- Muestra un formulario con un boton para login y enlace a register

- Al clickar, enviar datos del formulario de login al store y abrir y enviar acción abrir componente feedback

## HEADER

- Muestra título y logo de la app y menú de navegación

- Recibe página dónde se encuentra

## FOOTER

- Muestra título y logo de la app y un texto

## PAGINACIÓN

- Muestra botón anterior y botón posterior y texto recibido en función de situación de paginación
