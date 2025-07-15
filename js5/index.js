// const Address = require("./Address")
// const Person = require("./Person")

// const endereco = new Address("Rua Marciano Halchuk", "356", "Vila Bosque", "Maringá", "Paraná")
// const murilo = new Person("Murilo", endereco)

// console.log(murilo.address.fullAddress())

class Property{
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getPriceBySquare(){
        return this.price/this.area
    }
}

class House extends Property {}

const land = new Property(200, 100000)
const house = new House(300, 200000)

console.log(land)
console.log(house)

class Apartament extends Property {
    constructor(number, area, price){
        super(area, price)
        this.number = number
    }

    getFloor(){
        return this.number.slice(0, -2)
    }
}

const apartament = new Apartament("1502", 80, 600000)
console.log(apartament)
console.log(apartament.getFloor())