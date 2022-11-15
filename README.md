# EJERCICIO REACT

## 1. Crear un componente
## 2. Recibir una prop con el año actual
## 3. Ojo, usar funciones para sacar el año
## 4. Usar estados y eventos para tener dos botones
##  - Pasar al proximo año
##  - Ir al año anterior
##  - Mostrar en todo momento el año por pantalla
## Validar que el año introducido en el input es number
## Cambiar el año mediante un input de texto y que se cambie dinámicamente


### Recibe el año actual
![image](https://user-images.githubusercontent.com/88061350/200380201-7d496326-7ede-4e34-b5a8-496545946aee.png)

### Si se pulsa next o previous se incremente o decrementa el año
![image](https://user-images.githubusercontent.com/88061350/200380376-d42cd873-a708-41b5-84d0-6b0f945164b2.png)

### Si se pone un dato en el input que sea numérico se actualiza el año en caso contrario no muestra nada
![image](https://user-images.githubusercontent.com/88061350/200380524-a0986a17-cb4c-49e5-8aad-08101532a8d6.png)

### Si se pulsa en actual year se vuelve al año actual
![image](https://user-images.githubusercontent.com/88061350/200380700-874b7634-efff-4f9f-94de-408adcd9d153.png)


# EJERCICIO 2 TRABAJANDO CON RENDERIZADO CONDICIONAL

## Crear un componente que sea llamado en App.js
## Crear dentro del componente dos botones uno que muestre como vista título 1 y otro que muestre título 2
## Al pulsar uno u otro botón cambia el renderizado y se muestra título 1 o título 2

### En función del botón que se apriete se muestra Título 1 o Título 2
![image](https://user-images.githubusercontent.com/88061350/200404103-56ba3d71-b973-4e04-85e7-63484aa880b1.png)


## EJERCICIO 3 TRABAJAR PROPS, STATE Y EVENTOS

## Pasar desde el componente App a otro componente creado una variable contador que se inicializa a 20
## En el componente creado crear tres botones uno de incremento del contador, otro decremento, y otro reset que vuelve a inicializar la variable a 20

### La variable se inicializa como 20 y si se pulsa reset se inicializa también a 20
![image](https://user-images.githubusercontent.com/88061350/201364259-955b50ba-51ba-4dca-9459-864301b3e2bf.png)

### Si se pulsa +1 se incrementa
![image](https://user-images.githubusercontent.com/88061350/201364542-7dcafa7a-07dc-4ba2-a179-1992a53bbd9f.png)

### Si se pulsa -1 se decrementa
![image](https://user-images.githubusercontent.com/88061350/201364671-a391f55e-7367-4376-a6b3-78b31c0423f2.png)


## EJERCICIO 4 CREAR FORMULARIO CON CUSTOM HOOKS

### Crear un formulario y meter toda su funcionalidad en un custom hook llamado useForm
### Crear botón reset cuya funcionalidad también esté en el custom hook y que cuando se pulse resetee los valores del state

