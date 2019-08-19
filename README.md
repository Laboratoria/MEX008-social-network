# Creando una Red Social

## Índice

* [1. Introducción](#1-Introducción)
* [2. Datos Generales](#2-Datos-generales)
* [3. UserPersona](#3-UserPersona)
* [4. WomenBook](#4-WomenBook)


***

## 1. Introducción

En la actualidad existen una gran variedad de redes sociales, las cuales nos permiten generar un intercambio de información, publicidad, amistades, servicios, etc.; sin embargo no existe una red social que sea únicamente de mujeres y que tenga como objetivo ofrecer/buscar servicios, apoyos, orientación o información que permitan que las mujeres se apoyen de manera mutua, ya sea utilizando los servicios que ofrecen, consumiendo los productos que ellas ofrecen y/o ofrecer sus servicios, información, anunciarse, etc.

## 2. Datos Generales

Para identificar a nuestros usuarios realizamos una [encuesta](https://docs.google.com/forms/d/e/1FAIpQLSfrE00Zrd1bP4U1lpe1quu_0JCxcAF8DJ79Sr1DW2b4IN_wHA/viewform) la cual nos permitió conocer que la edad de nuestras usuarias es de entre 26 a 40 años. El 42% son solteras, seguido de casadas y unión libre con un 21%,  y un 15% son divorciadas. La mayoría reportó tener por lo menos un hijo.
Con respecto a la escolaridad de nuestras entrevistadas, más del 50% de ellas cuentan con estudios de licenciatura, seguido de un 21% con preparatoria.
Más del 70% de las entrevistadas reportaron ser independientes.
Un dato interesante es que todas las entrevistadas usan por lo menos una red social, específicamente Facebook, sin embargo, la mayoría están interesadas en pertener a una red social que sea únicamente para mujeres. Las encuestadas informaron que utilizarían esta red social para organizar grupos de mujeres con intereses en común,para recibir/publicar anuncios sobre diversas temáticas y para ofrecer un servicio. 
Las encuestadas informaron que les gustaría que la red social tuviera un muro de publicaciones y anuncios, y un chat para poder conversar con las personas que les interese.


## 3. UserPersona

<img src="src/imgenes/UserPersona.png">

## 4. WomenBook

<div style="text-align:center"><img src="src/imgenes/logo.png"></div>

WomenBook es una red social que está dirigida únicamente a mujeres que están interesadas en ofrecer y/o buscar algún servicio, orientación, consultoría, anuncio de negocio, grupos con intereses en común, etc., ya que en la actualidad no encontramos alguna red social que cumpla con tales características. 
Esta red social tiene como objetivo brindar a todas las mujeres una posibilidad de apoyarse tanto en el ámbito económico, al consumir sus servicios y/o productos, como en el ámbito emocional y jurídico.

Una vez que conocimos estas necesidades decidimos diseñar un [prototipo](https://marvelapp.com/648513g) de baja fidelidad, con el fin de realizar un testeo con nuestras potenciales usuarias, donde nos expresaran si la aplicación era intuitiva y contenía todo lo que ellas buscaban en una red social.

Después se decidió realizar un [prototipo](https://www.figma.com/proto/qVVBLcg5U1HEUcTqu5Zaw2/Untitled?node-id=14%3A20&scaling=scale-down) de alta fidelidad con el fin de que nuestras potenciales usuarias puedan experimentar los colores, la interfaz con sus funcionalidades y puedieran darnos una opinión más certera sobre si la plataforma cumple o no con sus expectativas.



### 4.2 Historias de usuario

Una vez que entiendas las necesidades de tus usuarixs, escribe las Historias de
Usuario que representen todo lo que necesitan hacer/ver en la Red Social. Cada
una de tus Historias de Usuario debe tener:

* **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las
  necesidades del usuario.

* **Definición de terminado:** todos los aspectos técnicos que deben cumplirse
  para que, como equipo, sepan que esa historia está terminada y lista
  para publicarse. **Todas** tus Historias de Usuario (salvo excepciones), deben
  incluir estos aspectos en su Definición de Terminado (más todo lo que
  necesiten agregar):

  - Debe ser una **SPA**.
  - Debe ser _responsive_.
  - Deben haber recibido _code review_ de al menos una compañera de otro equipo.
  - Hicieron los _test_ unitarios
  - Testearon manualmente buscando errores e imperfecciones simples.
  - Hicieron _pruebas_ de usabilidad e incorporaron el _feedback_ de los
    usuarios como mejoras.
  - Desplegaron su aplicación y etiquetaron la versión (git tag).

    

    > Como usuario nuevo debo poder crear una cuenta con email y password para 
    > poder iniciar sesion. Por otro lado, necesito también tener la opción de 
    > iniciar sesión con mi cuenta de Google o Facebook.
    >
    > **Criterios de aceptación**
    > - Si el mail o password no es válido, al momento de logearme, debo poder 
    >   ver un mensaje de error.
    > - Debe ser visible si hay algún mensaje de error.
    > - Debo poder ver esta página de creación en Móviles y desktop (responsive). 
    > - No debe necesitar recargar la página para crear una cuenta (SPA).
    >
    > **Definición de terminado**
    > - La funcionalidad cumple satisface los criterios de aceptación.
    > - La funcionalidad tiene _test unitarios_.
    > - El diseño visual corresponde al prototipo de alta fidelidad.
    > - El código de esta funcionalidad recibió code review.
    > - La funcionalidad esta desplegada y pública para ser probada. 
    > - La funcionalidad fue probada manualmente.
    > - Se hicieron pruebas de usuabilidad y se implementó el feedback si se 
    >   consideró necesario.


<!-- ### 5.4 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu aplicación
y, con eso, diseña la Interfaz de Usuario (UI por sus siglas en inglés) que
siga este flujo.

### 5.5 Responsive

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (_tablets_, celulares, etc.). Te
sugerimos seguir la técnica de _`mobile first`_ (más detalles sobre esta técnica
al final).

### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI)

Estas consideraciones te ayudarán a escribir las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - Para el _login_ y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
  - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al
  usuario a corregirlos.

#### Muro/timeline

* Validaciones:
  - Al publicar, se debe validar que exista contenido en el _input_.
* Comportamiento:
  - Al recargar la aplicación, se debe verificar si el usuario está _logueado_
    antes de mostrar contenido.
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.

### 5.7 Consideraciones técnicas Front-end

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con múltiples vistas. Para esto, tu aplicación debe ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación. Te recomendamos que uses
  [Firebase](https://firebase.google.com/) para eso también.
* Puedes usar un framework de CSS si lo consideras necesario. Algunos existentes
  son Bootstrap, Materialize, entre otros. 
  Puedes encontrar los populares en 
  [state Of CSS 2019](https://2019.stateofcss.com/technologies/css-frameworks/)

#### Pruebas unitarias (unit tests)

* Recuerda que no hay un _setup_ de **tests** definido, dependerá de
  la estructura de tu proyecto. Algo que no debes de olvidar es pensar en éstas
  pruebas, te pueden ayudar a definir la estructura y nomenclatura de tu lógica.

* Los tests unitarios deben cubrir un **mínimo del 70%** de _statements_,
  _functions_, _lines_, y _branches_.

### 5.8 Consideraciones técnicas UX

* Hacer al menos 2 entrevistas con usuarios.
* Hacer un  prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de _testing de usabilidad_ con el producto en HTML.

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Permite crear posts con imágenes.
* Permite buscar usuarios, agregar y eliminar "amigos".
* Permite definir la privacidad de los _posts_ (público o solamente para amigos).
* Permite ver su muro de cualquier usuario "no-amigo
(solamente los
  posts _públicos_).
* Permite comentar o responder una publicación.
* Permite editar perfil.

## 7. Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

## 8. Evaluación

NOTA: Esta sección incluye una lista de habilidades que se podrán tener en
cuenta a la hora de tu autoevaluación sobre el proyecto. Recuerda que los
niveles son fotografías de momento, y la rúbrica puede guiarte en tus siguientes
pasos durante tu autoaprendizaje.

Te aconsejamos revisar [nuestra rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada _habilidad_ y cada _nivel_. Te
recomendamos también que trates de aplicarte la rúbrica a tí misma y/o a los
proyectos de tus compañeras a lo largo del Bootcamp para ir viendo tu evolución.

### Habilidades Blandas (Soft Skills)

| Habilidad                                       |
|-------------------------------------------------|
| Planificación, organización y manejo del tiempo |
| Autoaprendizaje                                 |
| Presentaciones                                  |
| Adaptabilidad                                   |
| Solución de problemas                           |
| Trabajo en equipo                               |
| Responsabilidad                                 |
| Dar y recibir feedback                          |
| Comunicación eficaz                             |

### Habilidades Técnicas (Front-end)

| Habilidad                               |
|-----------------------------------------|
| **Computer Science (CS)**                                |
| Lógica / Algoritmia                     |
| Arquitectura                            |
| **Source Code Management (SCM)**                         |
| Git                                     |
| GitHub                                  |
| **JavaScript**                                           |
| Estilo (linter js)                      |
| Nomenclatura / semántica                |
| Uso de funciones / modularidad          |
| Estructuras de datos                    |
| Tests                                   |
| **HTML/CSS**                                             |
| Correctitud / Validación                |
| Estilo (linter html)                    |
| Semántica / Arquitectura de información |
| DRY (CSS)                               |
| Responsive Web Design                   |

### Habilidades Técnicas (UX)

| Habilidad       |
|-----------------|
| User Centricity |
| Visual Design   |

***

## 9. Pistas, tips y Lecturas complementarias

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve como adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
En este proyecto te invitamos a explorar opciones y decidir una opción
de implementación.

### Escritura de datos, persistencia

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firebase](https://firebase.google.com/).

Otras:

* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First - ZURB](https://zurb.com/word/mobile-first)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/) -->
