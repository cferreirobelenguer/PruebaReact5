# EJERCICIOS DE REACT

## EJERCICIO 1

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


## EJERCICIO 2 TRABAJANDO CON RENDERIZADO CONDICIONAL

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

### Hacer los siguientes test de comprobación creando el archivo Contador.test.jsx:
    - Verificar el snapshot
    - Comprobar que en la prop contador al inicializar el componente se muestra 20 y que ese dato existe
    - Comprobar que al pulsar el botón +1 se incrementa la variable
    - Comprobar que al pulsar el botón -1 se decrementa la variable
    - Verificar el funcionamiento del botón de reset
## EJERCICIO 4 CREAR FORMULARIO CON CUSTOM HOOKS

### Crear un formulario y meter toda su funcionalidad en un custom hook llamado useForm
### Crear botón reset cuya funcionalidad también esté en el custom hook y que cuando se pulse resetee los valores del state

![image](https://user-images.githubusercontent.com/88061350/201892408-6713cca0-2c28-426c-818c-215d718e1f35.png)

![image](https://user-images.githubusercontent.com/88061350/201892089-300f391d-dd38-4e58-9fac-38d657fb62f4.png)


## EJERCICIO 5 CONSULTAR API BREAKING BAD

## Crear un custom hook useFetch que pueda utilizarse en cualquier otro componente de peticiones api, pasando la url por parámetro
## Crear métodos de paginación dentro del custom hook e implementar en el componente la paginación
## Crear un searchBar que busque por id la página que queremos mostrar de datos

![image](https://user-images.githubusercontent.com/88061350/201926794-225f4709-3a35-42c8-bda3-d335cbd3f28e.png)

![image](https://user-images.githubusercontent.com/88061350/201926845-d9348f3a-48fb-47b9-b3be-76731ae9e882.png)


## EJERCICIO 6 PONER EL FOCO EN UN INPUT

## Poner el foco en un input que pide el nombre a través de useRef

![image](https://user-images.githubusercontent.com/88061350/201964311-5a93ccfd-ea89-45c5-89b0-3db51ce9d116.png)


## EJERCICIO 7 CREAR RUTAS CON REACT-ROUTER-DOM

## Instalar react-router-dom
npm install react-router-dom
## Crear tres 4 rutas en un NavBar: home, batman, superman y daredevil
## Crear un archivo js con un objeto literal heroes con los datos de batman, superman y daredevil
## Home redirige el componente principal
## Batman muestra los datos de batman correspondientes
## Superman muestra los datos de superman
## Daredevil muestra los datos de Daredevil
## Todos los componentes deben tener un botón de retorno al home
## Crear un custom hook useData que coja los datos de heroes y busque los datos a imprimir de cada componente en función de la ruta

### Componente home 

![image](https://user-images.githubusercontent.com/88061350/202554213-0c36733a-ad7a-4db7-a474-e4e0301ebaa3.png)

### Componente Superman, se muestran los datos de heroes.js; así como en Batman y Daredevil

![image](https://user-images.githubusercontent.com/88061350/202554417-33b051e1-fb5d-4e18-95b0-125307fda99a.png)

## EJERCICIO 8 DE USECALLBACK

### Tenemos un componente padre que comunica con el hijo, el padre tiene un arreglo, crea una función que incrementa el valor del state y le pasa al hijo por props recorriendo el arreglo : el valor y la función de incrementar. En el componente hijo por cada elemento del arreglo se crea un botón que indica el número pasado por props y ejecuta por evento click la función de incrementar. Se pide usar useCallback para que cuando se ejecuta la función incrementar sólo se ejecute la memoria una vez en el renderizado. 

![image](https://user-images.githubusercontent.com/88061350/202718370-abd41231-6715-44dc-93d3-a8127d08a917.png)

## EJERCICIO 9 CREAR UN DICCIONARIO CON LA API FREE DICTIONARY 
https://dictionaryapi.dev/

### Crear un input que recoja la palabra que formula el usuario y se muestra la respuesta

![image](https://user-images.githubusercontent.com/88061350/205078208-c6fa1256-e5f9-49f0-8431-c3e833af4e31.png)

![image](https://user-images.githubusercontent.com/88061350/205078305-235986cd-9695-4605-8a4e-df538fbc59fc.png)

## EJERCICIO 10 CREAR UNA TODO LIST CON USE REDUCER