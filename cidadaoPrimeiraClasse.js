const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar()) 
 

// Passar função como parametro
function run(fun){
    fun()
}

run(function(){console.log('executando....')})


//Aramizer funcao em um array
const array = [function(a,b) {return a + b}, run]
console.log(array[0](2,3))


//Uma funcao pode retornar/conter uma funcao
function sum(a, b){
    return function(c){
        return console.log(a + b + c)
    }
}

sum(3, 2)(4)