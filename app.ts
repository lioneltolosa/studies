//////////////////// USO DE LET AND CONST

// let mensaje = 'hola';

// if(true) {
//     let mensaje = 'Bye';
// }

// console.log(mensaje);





/////////////////////////////////////// INTRODUCCION A TIPOS DE DATOS

// let nombre:string = 'Lion';
// let numero:number = 123;
// let booleano: boolean = true;

// let hoy:Date = new Date();
// hoy = new Date('2020-10-12');

// let cualquiera:any;

// cualquiera = nombre;
// cualquiera = numero;
// // cualquiera = boolean;
// cualquiera = hoy;


// let spiderman = {
//     nombre: 'Lionel',
//     edad: 30
// }

// spiderman = {
//     nombre: 'Lionel',
//     edad: 30
//     poder: 'Trepar'       // ERROR
// }








////////////// LITERALES DEL ES6

// function bebe() {
//     return 'Mi mateo mi mateo mi gordito querido, yo te quiero yo te amo';
// }

// let texto = `${nombre} ${numero} ${hoy};`;

// let texto2 = `${bebe()}`;
// console.log(texto);
// console.log(texto2);











// Parámetros opcionales, obligatorios y por defecto

// Todos los parametros obligatorios siempre tienen que ir al pricipio

// function activar(quien?:string,
//                 objeto:string = 'batiseñal',
//                 momento?:string) { // Parametro opcional por el ?

//     let mensaje:string;

//     if( momento ) {
//         mensaje = `${ quien } activo la ${ objeto } en la ${ momento }`;
//     } else {
//         mensaje = `${ quien }  activo la ${ objeto }`;
//     }

//     console.log(mensaje);
// }

// activar('Lionel', 'batiseñal', 'tarde');











//////////////////////////////// Funciones de flecha

// Funcion 01
// let miFuncion = function( a ) {
//     return a;
// }

// let miFuncionFlecha = a => a;

// console.log(miFuncion('Function JavasScript'));
// console.log(miFuncionFlecha('Arrow Function Typescrip'));




// // Funcion 02
// let miFuncion2 = function (a:number, b:number) {
//     return a + b;
// }

// let miFuncionFlecha2 = (a:number, b:number) => a + b;

// console.log(miFuncion2(1, 2));
// console.log(miFuncionFlecha2(2, 2));




// // Funcion 03
// let miFuncion3 = function( name:string ) {
//     name = name.toUpperCase();
//     return name;
// }

// let miFuncion3Flecha = (name:string) => {
//     name = name.toUpperCase();
//     return name;
// }

// console.log(miFuncion3('Trapeo'));
// console.log(miFuncion3Flecha('Trapeo criminal'));



// Porque funciones de flecha

// let hulk = {
//     nombre: 'Hulk',
//     smash() {
//         setTimeout( () => console.log(this.nombre + ' Smash!!!'), 1500);
//     }
// }

// hulk.smash();














//////////////////////////////// Destructuración de Objetos y Arreglos

// Objetos {} // No importa el order
// let avenger = {
//     nombre: 'Lio',
//     clave: 'cati',
//     poder: 'papa'
// }

// let nombre = avenger.nombre;
// let clave = avenger.clave;
// let poder = avenger.poder;

// console.log(nombre, clave, poder)

//  const {nombre: n, clave: c, poder: p} = avenger;

//  console.log(`${n}, ${c}, ${p}`)



 // Arreglos [] Importa el orden 

//  let avenger2:string[] = ['Lion', 'Andrea', 'Mateo'];

//  //let [ papa, mama, gordititito] = avenger2;  //  Importa el orden 

//  let [ , , gordititito] = avenger2;  //  Importa el orden 

//  console.log(gordititito)












////////////////////////// Promesas en ES6
 // Posibilidad de ejecutar una tarea cuando una tarea acincrona es terminada

// let prom1 = new Promise( function( resolve, reject ) {
//     setTimeout( () => {
//         console.log('Promesa terminada');

//         // Temrina bien
//         // resolve();

//         // Temina mal
//         reject()
//     }, 1500 )
// })

// prom1.then ( function() {
//     console.log('Ejecutarme cuando se termine bien');
// }, 
//     function() {
//         console.error('Ejecutarme cuando se termine mal')
//     }
// )









//////////////////////////// Interfaces de TypeScript

// function enviarMision ( xmen:any) {
//     console.log('Enviando a: ' + xmen.nombre)
// };

// let wolverine = {
//     nombre: 'Wolverine',
//     poder: 'Regeneracion'
// };

// enviarMision(wolverine)




// interface Xmen {
//     nombre: string,
//     poder: string
// }

// function enviarMision ( xmen: Xmen) {
//     console.log('Enviando a: ' + xmen.nombre)
// };

// function enviarCuartel ( xmen: Xmen ) {
//     console.log('Enviando al cuartel: ' + xmen.nombre)
// };

// let wolverine:Xmen = {
//     nombre: 'Wolverine',
//     poder: 'Regeneracion'
// };

// enviarMision(wolverine);
// enviarCuartel(wolverine);














/////////////////// Definición de una clase básica en TypeScript

// class Avenger {
//     nombre:string = 'Lionel Miguel el super';    
//     equipo:string;
//     nombreReal:string;
//     puedePelear:boolean;
//     peleasGanadas:number;
// }

// let antman:Avenger = new Avenger();

// console.log(antman);   // Solo saldria el nombre porqu es el unico 
// valor asignado






// Constructores de una clase en TypeScript

// class Avenger {
//     nombreDeLaClase:string;
//     equipoDeLaClase:string;
//     nombreRealDeLaClase:string;

//     puedePelear:boolean;
//     peleasGanadas:number;

//     constructor( nombreDelConstructor:string, equipoDelConstructor:string, nombreRealDelConstructor:string) {
//         this.nombreDeLaClase = nombreDelConstructor;
//         this.equipoDeLaClase = equipoDelConstructor;
//         this.nombreRealDeLaClase = nombreRealDelConstructor;
//     }
// }

// let antman:Avenger = new Avenger( 'Antman' , 'E' , 'Pepito');

// console.log(antman);








////////////////////////// Decoradores de clases

// Un decorador es simplemente una funcion cualquiera

// function consola( constructor:Function ) {
//     console.log(constructor);
// }

// @consola
// class Villano {
    

//     // constructor(nombre: 'Catalan') {
//     //     this.nombre = nombre;
//     // }

//     constructor( public nombre:string) {
//     }
// }




