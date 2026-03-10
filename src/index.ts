// let numero:number = 10
// let palavra:string = "Algum texto"
// let bol: boolean = true

// let x:number|string = 10
// x = "Guilherme"

// const vetor: number[] = [1,2,3,4,5]
// vetor[2] = 10
// vetor.push(6)
// console.log(vetor)
// // vetor = [5,6,7,8,9]

// // Vetor de string

// let vetorString:string[] = ["a","b","ab"]

// type Pessoa={
//     id?:number,
//     nome:string,
//     idade:number
// }
// const pessoa:Pessoa ={
//     id:1,
//     nome:"Guilherme",
//     idade:18
// }
// const pessoa2:Pessoa ={
//     id:1,
//     nome:"Guilherme",
//     idade:18
// }
// pessoa.nome ="Terezinho"


// const cloudVoadora = []

// const batataVoadora:undefined = undefined


// const func =  (nome:string):string=>`${nome} Lindo :3`
// func("Tere")

// function somaVetor(v:number[]):number{
//     const soma = v.reduce((prev,curr)=>prev+curr,0)
//     return soma
// }
// //Corrija o typescript abaixo
// function somaVetor2(v:number[]):number{
//     let soma = 0
//     for (let i = 0; i < v.length; i++) {
//         soma = soma + v[i]!
//     }
//     return soma
// }
// const result = somaVetor2([1,2,3])
// console.log(`O valor de retorno é ${result}`)

// //Faça uma função que receba um vetor e devolva a soma
// //dos valores pares.

// function somaPar(v:number[]):number{
//     let soma = 0
//     for (let i = 0; i < v.length; i++) {
//         if(v[i]!%2==0){
//             soma = soma + v[i]!
//         }
//     }
//     return soma
// }
// console.log(`O valor da somapar é ${somaPar([1,2,3])}`)

// //Faça uma função que receba dois vetores e retorne 
// //um novo vetor com todos os valores passados.
// //Exempo func merge([123],[456]) retorna [1,2,3,4,5,6]




// // import express from 'express'

// // const app = express()
// // app.use(express.json())

// // app.get("/",(req,res)=>{
// //     res.send("Olá Mundo!")
// // })

// // app.listen(8000,()=>{
// //     console.log("Meu servidor está rodando na porta 8000")
// // })



/**
 * Exercício 02 - divisivelPor11
 * Nome da função - divisivelPor11
 * Crie uma função que retorna um array com os números divisíveis por 11 no intervalo
 * @param {number} min Número mínimo
 * @param {number} max Número máximo
 * @returns {number[]} Retorna um array com os números divisíveis por 11 no intervalo
 * @example
 *  divisivelPor11(1, 100) // [11, 22, 33, 44, 55, 66, 77, 88, 99]
 *  
 * divisivelPor11(11, 110) // [11, 22, 33, 44, 55, 66, 77, 88, 99, 110]
 */

//Início do seu código

function divisivelPor11(min: number, max: number) {
    const vetorDivisiveis11: number[] = []
    for (let i = min; i <= max; i++) {
        if (i % 11 === 0) {
            vetorDivisiveis11.push(i)
        }
    }
    return vetorDivisiveis11
}

// function divisivelPor11(min: number, max: number) {
//     let i = min;
//     const vetorDivisiveis11: number[] = []
//     while (i <= max) {
//         if (i % 11 === 0) {
//             vetorDivisiveis11.push(i)
//         }
//         i++
//     }
//     return vetorDivisiveis11
// }

// console.log(divisivelPor11(1, 100))
//Fim do seu código

/**
 * Exercício 01 - cria um novo vetor com os valores do vetor original mais dois novos valores
 * Nome da função - criaNovoVetor
 * Crie uma função que retorne um novo vetor com os valores do vetor original mais dois novos valores
 * @param {number[]} vetor Vetor de números
 * @param {number} valor1 Primeiro valor a ser adicionado
 * @param {number} valor2 Segundo valor a ser adicionado
 * @returns {number[]} Retorna um novo vetor com os valores do vetor original mais dois novos valores
 * @example
 * criaNovoVetor([1, 2, 3], 4, 5) // [1, 2, 3, 4, 5]
 * criaNovoVetor([1, 2, 3], 0, 0) // [1, 2, 3, 0, 0]
 */ 

//Início do seu código
// function criaNovoVetor(vetor:number[],valor1:number,valor2:number){
//     const v = vetor.map(x=>x**0.5)
//     v.push(valor1,valor2)
//     return v
// }
// const vetor2 = [1, 2, 3]
// console.log(criaNovoVetor(vetor2, 0, 0))
// console.log(vetor2)

//Fim do seu código


// Conteúdo de hoje   => Promisses

//Assincrona?
function minhaPromessa():Promise<string>{
    const prom:Promise<string> = new Promise<string>((resolve,reject)=>{
        setTimeout(()=>reject("Tere Erro"),5000)
    })
    return prom
}
minhaPromessa()
.then((valor)=>console.log(valor))
.catch((erro)=>console.log(erro))
console.log("Executei esse código")

try{
    const resultado = await minhaPromessa()
    console.log(resultado)
}
catch(erro){
    console.log(erro)
}


//Crie uma função que tenha 50% de chance de retornar tere ou 
// a função devolve o valor null
//  function devolveTere()