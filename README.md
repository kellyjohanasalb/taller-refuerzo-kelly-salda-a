# MÓDULO SOBRE REACT JS
###### Explicar brevemente el concepto de ReactJS y sus principales características.

<p> Es una libreria de JavaScript desarrollada por Facebook para construir interfaces de usuario. Se utiliza principalmente para desarrollar aplicaciones web de una sola página
</p>
###### Definir qué es un componente en ReactJS y mencionar los tipos de componentes que existen
<p>
 Un componente es una unidad independiente y reutilizable de código que encapsula parte de la interfaz de usuario.
</p>
- ejemplo
- componentes de clase: y estos se definen utilizando clases de javascript y pueden contener un estado.
- componentes de funcion: estos se definen utilizando funcones de javascript y a partir de la introducción de Hooks en React 16.8, los componentes funcionales pueden tener estado y efectos secundarios usando useState y useEffect.

###### ¿Qué es el Virtual DOM y cuál es su función en ReactJS?
<p>
Es un aparte fundamental y crusial ya que nos permite actualizar y renderizar las interfaces de usuario. y su funcion es optimizacion de rendimiento y actualizacion eficaz.
</p>

######  ¿Qué es JSX en ReactJS y porqué es importante?
<p>
Bueno lo que entiendo que significa jsx es el formato que usa react, y eso se traduce a que funcionamos con javascript y html juntos permitiendonos tener legibilidad y estructura clara, facilitando la creacion  de componentes
</p>
###### ¿Qué es un Hook en ReactJS y cuál es su propósito?
<p>
se puede decir que los hooks nos permiten enganchar  caracteristicas de react como los estados y cilos de vida. y su porposito es el uso de estado, ciclos de vida del componente, reutilizar logica deltro de los componentes y simplificaion de codigo.
</p>
###### Mencionar al menos tres tipos de Hooks en ReactJS y explicar brevemente para qué se utilizan. 
- useState : usa un estado actual y un estado que va actualizando.
- useEffect:  se usa  para realizar efectos secundarios 
- useContext: se utiliza para acceder al "contexto" en un componente funcional.
###### ¿Cuáles son las reglas de uso para los Hooks en   ReactJS?  
- solo llamar los hooks en el nivel superior.
- se deben llamar los hooks en componentes o hooks personalizados
- no llamar hooks condicionalmente.

#####  Explicar qué es React Router DOM versión 6, para qué se utiliza y cuáles son sus principales componentes y Hooks.
<p>
React router dom es una biblioteca nos permite manejar rutas en aplicaciones web creadas con react
</p>
###### sus principales componentes son :
- BrowserRouter
- Routes
- Route
- Link
- Navlink 
- Outlet
###### Hooks Principales
- useNavigate
- useParams
- useLocation
- useRoutes
#####  Explicar cómo se realiza la navegación entre diferentes páginas utilizando React Router DOM.
<p>
se le da una un enrutramiento con un archivo de approuter, despues creas un -navlink para navegacion entre paginas en ves de usar  (a href) sin  tener que recargr la pagina, y ya para una navegacion programatica se usa  useNavigate.
</p>

##### ¿Cómo se definen rutas en React Router DOM?
<p>
Las rutas en React Router DOM se definen usando BrowserRouter como envoltorio, Routes para agrupar las rutas, y Route para cada ruta específica. Se puede crear rutas anidadas y rutas con parámetros según las necesidades de la aplicación.
</p>

##### Describir cómo crear un proyecto ReactJS con Vite
<p>
usamos esta comando npm create vite@latest my-vue-app -- --template react y de ahi ya limpiamos los archivos que carga por defecto y que no vamos a usar y listo.
</p>

##### Describir cómo desplegar un JSON server en cualquier Hosting free o servicio en la nube gratuito de su elección
<p>
se instala axios, y despues de tener un archivo json procedemos a buscar nuestro servicio como reilway, entramos y damos nuevo proyecto y escogemos en repositorio del cual vamos a desplegar, de ahi entramos y le damos que nos reciba todo los repositorios, save y buscamos el repo  y le damos el deploy y esperamos y listo. aqui respondo la pregunda 12 y 13
</p>

##### ¿Qué es React Context y para qué se utiliza en el desarrollo web con React?
<p>
 es una característica de React que nos permite compartir valores como preferencias, temas, datos de autenticación, etc., entre componentes sin necesidad de pasar explícitamente props a través de cada nivel de los componentes. Y se utuliza para darle como una inyeccion de depencias a nivel de toda la aplicacion o una parte de ella, lo que facilita la gestion del estado global</p>

 # MÓDULO SOBRE GESTION DE ESTADOS Y DATOS CON REACT CONTEXT Y USEREDUCER 
##### Describir cómo se crea un contexto en React y cómo se proporciona y consume información a través de él
-  primero creamos un contecto 

```
// MiContexto.js
import React from 'react';

const MiContexto = React.createContext(valorPorDefecto); // Puedes establecer un valor por defecto aquí
export default MiContexto;

```
- un provaider

```
// App.js
import React from 'react';
import MiContexto from './MiContexto';

function App() {
  const valorDelContexto = { /* algún estado o valor */ };

  return (
    <MiContexto.Provider value={valorDelContexto}>
      {/* El resto de tu aplicación */}
    </MiContexto.Provider>
  );
}
```
- y de ahi usamos el useContext para consumir

```
// ComponenteHijo.js
import React, { useContext } from 'react';
import MiContexto from './MiContexto';

function ComponenteHijo() {
  const valor = useContext(MiContexto);
  // Usa el valor del contexto aquí
}
```

