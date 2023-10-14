/*

Callbacks: Una vez que termina la execucion de la funcion primaria, 
permite que entonces se ejecuten funciones dentro de si mismas
cuando pasamos un callback lo hacemos porque no siempre sabemos que queremos que pase
luego de nuestra funcion. No siempre se llaman al final, sino que por ejemplo de el MAP 
se ejecuta para cada elemento de la lista

*/

let data_prueba = [1,2,3,4,5]


let new_data = data_prueba.map(elem => elem*2)


const myMap2 = (array, callback) => {
    let newArray = []
    for(let i = 0; i<array.length; i++){
        newArray.push(callback(array[i], i, array))
    }
    return newArray
}
Array.prototype.myMap = function(callback){
    let newArray = []
    console.log("con fuction: ", this)
    for(i=0; i<this.length; i++){
   
        newArray.push(callback(this[i]))
    }
    return newArray
} 

this.array = 'bluuu'
console.log("global this: ", this)

Array.prototype.myMap_arrow = (callback) => {
    let newArray = []
    console.log("arrow: ", this)
    for(i=0; i<this.length; i++){
        newArray.push(callback(this[i]))
    }
    return newArray
} 



//Las arrow functions to man el this del contexto donde se las ejecute, en este caso es local.

const data_callback_2 = myMap2(data_prueba, (elem, i) => elem= i*2)

const data_callback_3 =  data_prueba.myMap(elem => elem*2)

const data_callback_4 = data_callback_2.myMap_arrow(elem => elem*2)




console.log('Entendimiento aparte');
const globalVar = 10;



const regularFunction = function () {
    const localVar = 20;
    console.log(globalVar); // 10
    console.log(localVar); // 20
};

const arrowFunction = () => {
    const localVar = 30;
    console.log(globalVar); // 10
    console.log(localVar); // 30
};

regularFunction();
arrowFunction();



//EL callBack es el ultimo parametro de una fucnion, 



const suma = (a,b) => a+b

const resta = (a,b) => a-b

const mul= (a,b) => a-b

const div = (a,b) => a-b



const calculadora = (num1,num2, fun) =>{
    console.log(`${num1} :s${fun.name}: ${num2}`)
    return fun(num1,num2)
}

console.log(calculadora(1,2,suma))


//suele ser una fucinon que recibe dos params error and success
const ejemploCallBack = (error, resultado) => {

    if(error){
        // hacer algo con el error
        console.log(error)
    }else{
        // hacer algo con el resultado
        return  resultado
    }
}