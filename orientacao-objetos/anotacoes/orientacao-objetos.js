/*
- orientação a objetos

abstração:
isolar um aspecto determinado de um estado de coisas relativamente complexo
herança:
objeto filho herda propriedades e metodos objetos pais
pilares(encapsulamento):
cada classe tem propriedades e métodos independentes do restante do código
pilares(polimorfismo):
objetos podem herdar mesma classe pai, mas se comporta de forma diferente


OOJS - object oriented programming in javascript

protótipos
todos objetos javascript herdam propriedades e metodos de um prototype.
Object.prototype está no topo desta cadeia


Classes
nao existem nativamente
syntatic sugar - feita para facilitar a escrita
todas as classes são objetos e a herança se dá por protótipos

class Meal{
    constructor (food){
        this.food = food
    }
    eat() {
        return "=)"
    }
}



*/