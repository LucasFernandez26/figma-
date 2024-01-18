// function saludarMañana(){
//     console.log("hola mundo por la mañana")
// }
// function saludarTarde(){
//     console.log("hasta mañana")
// }


// saludarMañana();

// function suma(){
//     console.log(5+5);
//     console.log(10+3);
//     return 53;
// }


// function resta(){
//     console.log(5+5);
//     console.log(10+3);
//     return 10-3;
// }

// console.log("1.", suma)
// console.log("2.", resta())

// var resultado= suma();
// console.log("3.", resultado)

// function suma(a,b,c,d, e ,f){
// //entre parentecis van los argumentos, cuando uno la invoca se pasan a parametros
// var numero1 = a ;
// var numero2 = b ;
// var suma = d + e ;

// console.log ("1.", numero1 , a)
// console.log ("2." , numero2 , b)
// console.log("3. ", suma , d,e)
// return f;

// }
// suma(5,5,1,4,45,32,4,1,6)
// var resultado = suma()
// console.log(resultado)

function saludar(nombre){
    return "hola " + " "+ nombre;
}
function hola(){
    var nombre = "lucas" 
    var resultado= saludar(nombre);
    console.log(resultado);
}
hola();