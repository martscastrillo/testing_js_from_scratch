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
Multipropósito o Robustas
Pueden ejecutar la mayoría de pruebas de la pirámide o trofeo, tanto para backend, frontend, integration test, algunas hasta UI y API s testing.
Jest, _Chai, Mocha, Ava, Jasmine _
UI Testing
Pruebas desplegadas en un dispositivo real o simulado bajo un Browser (navegador) automatizando toques y gestos en la aplicación.
Playwright, _ Cypress, WebdriverIO, Puppeteer_
API Testing
En general, las APIs no tienen UI, usan protocolos de servicios por peticiones.
Supertest, Dredd, Postman
Pruebas Estáticas
Estas pruebas no ejecutan el código, estas herramientas se integran al editor de código y van analizando si hay alguna mala práctica.
ESLint, Prettier, Typescript tools (TSLint)
*Todas estas herramientas manejan una sola estructura (de forma), de modo que el lenguaje o framework pasa a un segundo plano.

## Creando el proyecto


## Tu primer test

## Pruebas estáticas

## Assertions / matchers

## Setup and Teardown


## Implementado Setup


## Tipos de pruebas

## Metodologías

## Pruebas unitarias

## Coverage report

## Instalación de Docker para este curso

## Proyecto de API

## Mocking, Stub, doubles

## Mocking

## Spies

## Generando Fake Books

## Integration Test & E2E

## Configurando supertest en el API

## Integration Test

## e2e


## UI Test

## Automatizar

## Unit tests en GitHubActions


## E2E en GitHubActions

## ¿Quieres más cursos de testing?

