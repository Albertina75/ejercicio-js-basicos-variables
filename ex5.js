/**
 * CUAN VIEJO/A VOY A SER?
 *
 * Completa el script para que, estableciendo tu año de nacimiento, el programa muestre por pantalla el próximo mensaje, en función de tu edad de nacimiento. Es decir, si yo he nacido en 1982. el mensaje debería ser el siguiente:
 * 
 * "En el año {futureYear} yo voy a tener 68 o 69 años"
 * 
 * 
 */

 let birthYear = 1975;
 let futureYear = 2050;
 let currentYear = new Date().getFullYear();
 let age = futureYear - birthYear;

 let message = `En el año ${futureYear} yo voy a tener ${age} o ${age + 1} años.`;
 console.log(message);
 

