# Curso de Introducción al Testing con JavaScript
## La piramide del testing

La pirámide clásica del testing: (de menos a más costoso y tendría que haber más pruebas de las primeras que de las últimas)
- unit tests
- integration tests
- end to end tests (e2e)
- ui test: emulan el dispositivo físico
En javascript se recomienda en vez la pirámide el trofeo de tests:
- static tests: el tronco (el segundo mayor número de pruebas)
- unit tests: mismo num. de pruebas que e2e y menos que static e integration
- integration tests: el mayor número de pruebas debe ser aquí
- e2e tests: mismo tamaño que unit tests y menos que static e integration

## Deuda técnica
Igual que en las finanzas, las deudas no son buenas ni malas, solo son una estrategia para alcanzar algo y luego se paga. Haciendo pruebas se maneja el riesgo
- Diseño
- Desarrollo
- Pruebas
- Producción
El momento y pruebas dependen de la fase en la que se encuentra la compañía:
- Tracción
- Inflexión
- Escala
- Expansión
La deuda de deficiencia del desarrollador puede ser alta porque en la fase de tracción, la compañía busca velocidad > precisión , de modo que en esta etapa el testing no se valora, ya que buscan lanzar, lanzar, lanzar…
Cuando se entra a la fase de inflexión, hay más usuarios y se empiezan a escribir más pruebas, curando la deuda.

## Herremientas de testing
Herramientas de Testing [resumen]
Estas herramientas mencionadas están clasificadas según el tipo o nivel de pruebas a realizar.
#### Multipropósito o Robustas
-   Pueden ejecutar la mayoría de pruebas de la pirámide o trofeo, tanto para backend, frontend, integration test, algunas hasta UI y API s testing.
-   Jest, _Chai, Mocha, Ava, Jasmine _
#### UI Testing
- Pruebas desplegadas en un dispositivo real o simulado bajo un Browser (navegador) automatizando toques y gestos en la aplicación.
- Playwright, _ Cypress, WebdriverIO, Puppeteer_
#### API Testing
- En general, las APIs no tienen UI, usan protocolos de servicios por peticiones.
- Supertest, Dredd, Postman
#### Pruebas Estáticas
- Estas pruebas no ejecutan el código, estas herramientas se integran al editor de código y van analizando si hay alguna mala práctica.
- ESLint, Prettier, Typescript tools (TSLint)
*Todas estas herramientas manejan una sola estructura (de forma), de modo que el lenguaje o framework pasa a un segundo plano.

## Pruebas estáticas
Las pruebas estáticas se caracterizan por no ejecutar código, solo lo analizan y nos dan un feedback temprano.
Estas nos ayudan a ver si estamos teniendo buenas prácticas al escribir nuestro código.
Hay herramientas que nos ayudan a ejecutar esta pruebas estáticas como lo son:
- ESLint
- Prettier
- TypeScript
Vamos a empezar a crear pruebas estáticas con ESLint, para esto debemos instalarlo:
```
npm i -D eslint
```
Luego de instalarlo, vamos a ejecutar el siguiente comando que nos permitirá traer ciertas configuraciones y establecer configuraciones por defecto:
```
npx eslint --init
```
Luego nos va a preguntar las siguientes opciones:
- Si queremos hacer un check de nuestra sintaxis
- Si queremos hacer check de sintaxis y encontrar problemas
- Si queremos hacer check de sintaxis, encontrar problemas y forzar el estilo de código
Luego nos preguntará una serie de cosas relacionadas a que tecnologías estamos utilizando en nuestro proyecto, respondemos estas preguntas.
Luego nos pregunta si corre en navegador o en un entorno de Node.
Nos pregunta si queremos usar una guía de estilo de código, la más popular y las más recomendable suele ser la de Airbnb.
Luego elegimos el formato del código.
Por ultimo nos pregunta si deseamos instalar esos paquetes.
Ya con esto podemos tener un análisis de código estático para poder tener un estándar en el cual nos podamos basar a la hora de escribir nuestro código y siguiendo buenas practicas, siguiendo un estándar que nos permita escribir un código de la misma forma siguiendo convenciones.
Luego en el archivo de configuración package.json podemos establecer un script que nos permita hacer un examen de cualquier archivo en nuestra carpeta scr.
```
{
  ...
  "scripts": {
    ...
		// Marca los errores
    "lint": "eslint src/**",
		// Marcar los errores y arreglar los problemas
    "lint:fix": "eslint src/** --fix"
  },
  ...
}
```
#### Arreglar errores de Jest
Para que no nos salte errores cuando usamos nuestras funciones de Jest usamos en el archivo de configuración de .eslint.js la siguiente configuración:
```
module.exports = {
  env: {
    ...
		// Todo lo que venga de Jest no los alerta
    jest: true,
  },
  ...
};
```

## Assertions / matchers
Assertions o afirmaciones, con los cuales se puede verificar el comportamiento del código, algunas de los assertions más comunes de Jest, son:
1. ```expect``` : es la función principal de Jest y se utiliza para especificar la salida esperada de una función o valor. Por ejemplo: ```expect(2 + 2).toBe(4)```.
2. ```toBe``` : compara dos valores usando el operador ===. Por ejemplo: ```expect(2 + 2).toBe(4)```.
3. ```toEqual``` : compara dos valores recursivamente para verificar si son iguales. Por ejemplo: expect({ a: 1 }).toEqual({ a: 1 })```.
4. ```toMatch``` : comprueba si una cadena o expresión regular coincide con una cadena esperada. Por ejemplo: expect("Hello World").toMatch(/Hello/)```.
5. ```toBeNull``` : comprueba si un valor es null. Por ejemplo: ```expect(null).toBeNull()```.
6. ```toBeUndefined``` : comprueba si un valor es undefined. Por ejemplo: ```expect(undefined).toBeUndefined()```.
7. ```toBeDefined``` : comprueba si un valor no es undefined. Por ejemplo: ```expect("Hello").toBeDefined()```.
8. ```toBeTruthy```: comprueba si un valor es verdadero. Por ejemplo: ```expect("Hello").toBeTruthy()```.
9. ```toBeFalsy``` : comprueba si un valor es falso. Por ejemplo: ```expect("").toBeFalsy()```.
10. ```toThrow``` : comprueba si una función lanza una excepción. Por ejemplo: ```expect(() => { throw new Error(); }).toThrow()``` 


## Setup and Teardownpráctica poner console.log.
En Jest hay cláusulas para isolar las pruebas, donde un escenario de pruebas no afecte a otro, para ello se agrupan los casos con ```describe()```.
Teardown se trata de demoler o quitar casos de prueba anteriores para que no afecten en el actual al usar los hooks, que son sentencias adicionales según el tiempo de ejecución del grupo o los casos.
Veamos ahora como hacer esto:
```javascript
// Podemos encerrar varios test() dentro de este describe()
/* Esto nos sirve para cosas como mejorar la lectura y el
encapsulamiento */
describe('conjuto', () => {
  test('case 1', () => {
    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    expect(2 + 2).toBe(4);
  });

  // Inlcuso podemos tener conjuntos de test unos dentro de otros
  describe('conjunto dentro de conjunto', () => {
    test('case 3', () => {
      expect(3 + 3).toBe(6);
    });

    test('case 4', () => {
      expect(4 + 4).toBe(8);
    });
  });
});
```
También podemos tener cosas como el ```beforeAll()```, el cual es una sentencia que se ejecuta antes de todas las pruebas.
```javascript
describe('conjuto', () => {
  beforeAll(() => {
    // se ejecuta antes de todas las pruebas.
  });
	...
});
```
Esto nos sirve por ejemplo: en caso de que necesitemos levantar una base de datos antes de hacer las pruebas para tener los datos necesarios.
EL ```afterAll()``` se ejecuta después de que se ejecute todas las pruebas, en todos los casos de prueba.
```javascript
describe('conjuto', () => {
  afterAll(() => {
    // Se ejecuta después de todas las pruebas
  });
	...
});
```
Esto nos puede servir por ejemplo para una vez ejecutada la prueba podamos bajar la base de datos en nuestro test.
EL ```beforeEach()```, es una sentencia que se va a ejecutar por cada una de las pruebas, ósea en vez de hacerlo antes de que se hagan las pruebas, lo hace en todas y cada una de las pruebas antes de que se ejecuten.
```javascript
describe('conjuto', () => {
  beforeEach(() => {
    // Se ejecuta antes de que se haga una prueba en cada prueba
  });
	...
});
```
El ```afterEach()```, es lo mismo que el ```beforeEach()```, solo que en vez de hacerlo antes de cada una de las pruebas, lo hace después de cada una de las pruebas.
```javascript
describe('conjuto', () => {
  afterEach(() => {
    // Se ejecuta después de que se haga una prueba en cada prueba
  });
	...
});
```

## Implementado Setup
```javascript
// Aquí implementaremos los hooks y los grupos (describe) con una clase de pruebas.

const Person = require('./06-person');

describe('Test for Person', () => { // Se agrupan las pruebas de rango IMC
  let person; // Se instancia el objeto persona para automatizar.
  beforeEach(() => {
    person = new Person('Rigo', 45, 1.7); // Asignamos datos a la nueva persona.
  });
  test('should return down', () => {
    person.weight = 45; // Cambiamos los datos de la persona para este rango/caso.
    const imc = person.calcIMC();
    expect(imc).toBe('down');
  });
  test('should return normal', () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
```

## Tipos de pruebas

SUT (System Under Test): Sujeto Bajo Prueba, por ejemplo, Person sería nuestro SUT, no necesariamente tiene que ser un sistema.
- Validar: A la hora de validar resolvemos la siguiente pregunta: ¿estamos construyendo el sistema correcto?, por lo general, en la capa de requerimientos con el cliente y si le da valor a él.
- Verificar: Cuando ya se hacen pruebas, se verifica teniendo en mente la pregunta: ¿estamos construyendo el sistema correctamente? casi obviando que ya se produce valor al cliente. En todas las capas se pueden hacer pruebas, incluso sin código, como en los UML o en la revisión con el equipo de Scrum.
    - **Pruebas Funcionales.** Son las que validan que se cumplan los requerimientos de valor para el cliente (como guardar bien los buenos datos de un usuario); hasta este punto es lo que hemos hecho en VS code. Por norma general, las pruebas unitarias las entrega el desarrollador, el tester se empieza a involucrar en las pruebas de integración o E2E.
    - **Pruebas No Funcionales.** Verifican más el óptimo manejo de los recursos del software, no el cumplimiento de requisitos persé, como lo son pruebas de: +rendimiento +carga o estabilidad +estrés +usabilidad +seguridad. Estas pruebas no necesariamente deben estar desde el principio.

## Metodologías
- TDD (Test Driven Development): Desarrollo guiado por pruebas, donde primero se hacen las pruebas antes de escribir el código (primero los expects).
- BDD (Behavior Driven Development): Desarrollo guiado por comportamiento de acuerdo a los requisitos y luego las pruebas.
- AAA “Mantra” para hacer pruebas
    - _____ preparar Arrange | Given dado algo
    - _________ ejecutar Act | When cuando
    - resolver hipótesis Assert | Then entonces
* Falso Positívo Cuando una prueba indica un error, pero todo está bien, por ejemplo, testeando el método suma de 1 +1 y pongo el expect en 5, es un falso positivo, luego la prueba está mal.
* Falso Negativo Son más comunes, ya que parece que todo está normal, pero no se ha identificado el error, el set de pruebas debería ser más amplio; esto sucede cuando caemos en tan solo, probar el Happy Path, probar las condiciones en las que sabemos que el sistema funciona, por ejemplo, en el SUT de dividir las primeras pruebas salían bien porque no se tomó en cuenta la división entre cero 0, luego se hizo la prueba y el refactor. En caso de falso negativo lo mejor es aplicar TDD.
* Sistema Legacy Son sistemas que te piden agregar pruebas a algo funcional, incluso en paralelo; hay que refactorizar los métodos enormes a pequeños para hacer unit test de pocos a muchos métodos; legacy no lleva una buena arquitectura.
* Clean Architecture Este patrón lleva buenas prácticas desde el principio, cada método está bien dividido y con responsabilidades acertadas, es mucho más facil de agregar el set de pruebas.

## Pruebas unitarias
Son las más comunes, también se conocen como ‘pruebas aisladas’.
- Pruebas de caja negra: solo me importa el input y output, no me importa la lógica interna.
- Pruebas de caja blanca: sí me importa la lógica interna, hago más pruebas de comportamiento.
¿Qué es una unidad?
Puede ser…
- Una función
- Una clase
Todo depende del contexto.

## Coverage report
Es una medida porcentual que indica cuanto falta probar del código que va a ir a producción, cuál ya está probado, cuál no se usa. ISO y la FAA exigen 100% de cobertura, pero en la realidad no es tan así, por ejemplo hacer test a setter y getters puede llegar a ser innecesario, este 100% no garantiza que aparezcan errores ni que sean el mejor set de pruebas.

## Mocking, Stub, doubles
- Dummy: Son datos ficticios para llenar información.
- Fake: Son objetos que simulan comportamientos o datos; como un usuario ficticio.
- Stubs: Son proveedores o APIs de tatos preparados (BD Clima).
- Spies: Son como los stubs, pero se dejan espiar su comportamiento, comunicación e invocación.
- Mocks: Stubs + Spies, pueden estar pre-programados para enviar las respuestas supuestas.


