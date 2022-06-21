// == Variables y tipos de datos =========================================
// -- Declaración de variables -------------------------------------------
// Existen 3 declaradores diferentes de variables

// ** 1. var *************************************************************

/* "var" es el declarador que existe desde los inicios de JS, este declarador tiene un "function scope" (ahorita te explico que es el scope) y hoy en día su uso ya no es tan recomendado. 
 * Permite asigna un valor inicial a la variable.
 * Permite también reasignar ese valor cuantas veces sea necesario.
 * El valor de una variable puede ser leído fuera del scope donde se declaró. */
console.log('..Variables declaradas con var...................')
var miPrimerVariable = 1 /*declaramos la variable*/
console.log({ miPrimerVariable })
miPrimerVariable = 10 /*cambiamos su valor*/
console.log({ miPrimerVariable })
miPrimerVariable = 'hola!' /*cambiamos su valor a otro tipo de dato*/
console.log({ miPrimerVariable })
miPrimerVariable = 1 /*regresamos al valor original*/

// ¿Qué pasa si asigno una variable sin un valor por defecto?
var variableSinValor /*declaramos variable sin valor inicial*/
console.log({ variableSinValor })
variableSinValor = 'un valor' /*le colocamos un valor*/
console.log({ variableSinValor })

// ** 2. let *************************************************************
/* "let" es una de las recientes formas de declarar variables en JS introducida en 2015. Es bastante similar a "var", sólo que let existe dentro de un "block scope" (no te preocupes, ya casi te explico qué es). El uso de let está enfocado en variables que durante el tiempo de ejecución del script, tiende a cambiar constantemente de valor.
 * Permite asigna un valor inicial a la variable.
 * Permite también reasignar ese valor cuantas veces sea necesario.
 * El valor de una variable NO puede ser leído fuera del scope donde se declaró.*/
console.log()
console.log('..Variables declaradas con let...................')
let variableConLet = 143.23 /*declaramos la variable con let*/
console.log({ variableConLet })
variableConLet = -3.1416 /*cambiamos su valor*/
console.log({ variableConLet })
variableConLet = false /*cambiamos su valor a otro tipo de dato*/
console.log({ variableConLet })
variableConLet = 143.23 /*regresamos al valor original*/

// ¿Qué pasa si asigno una variable sin un valor por defecto?
let letSinValor /*declaramos variable sin valor inicial*/
console.log({ letSinValor })
letSinValor = 'let declarator' /*le colocamos un valor*/
console.log({ letSinValor })

// A simple viste parece que "var" y "let" funcionan exactamente igual, pero esto va a cambiar en unos minutos...

// ** 2. const ***********************************************************
/* "const" es una de las recientes formas de declarar variables en JS introducida en 2015. Al igual que "let", las variables declaradas con "const" existen dentro de un "block scope" (no te preocupes, ya casi te explico qué es). La gran diferencia entre "const" con respecto a "var" y "let" es que una vez declarada la variable, esta NO permite modificar o reasignar su valor iniciar (siendo más conocida como una constante)
 * Necesita asigna un valor inicial a la variable.
 * NO Permite reasignar ese valor inicial.
 * El valor de una variable NO puede ser leído fuera del scope donde se declaró.*/
console.log()
console.log('..Variables declaradas con const.................')
const variableConConst = 123456 /*declaramos la variable con let*/
console.log({ variableConConst })
variableConConst = -3.1416 /*intentamos cambiamos su valor*/
console.log({ variableConConst })

// ¿Qué pasa si asigno una variable sin un valor por defecto?
// const constSinValor /*declaramos variable sin valor inicial*/
// console.log({ constSinValor })
// constSinValor = 'let declarator' /*intentamos asignar un valor*/
// console.log({ constSinValor })


// -- Preguntas Frecuentes -----------------------------------------------

/* 1. ¿Cual es la convención para escribir variables en Javascript?
   R: Deben de estar escritas en "camelCase" style (La primer palabra va en minúscula y todas las demás van a escribirse con su primer letra en mayúscula; las palabras van unidas, no hay ningún caracter que las separe)
Ejemplo: holaComoEstasSoyCamelCase

   2. En otros lenguajes de programación, si reasigno el valor de una variable, debo de colocar otro valor del mismo tipo de dato. No es posible cambiar el tipo de datos de una variable previamente declarada ¿Aplica también para Javascript?
  R: NO, aquí Javascript sí te permite cambiar el tipo de dato de una variable al reasignarla, es decir, que puedes pasar de un "string" a un "number" sin ningún problema. */

// -- Tipos de datos -----------------------------------------------------