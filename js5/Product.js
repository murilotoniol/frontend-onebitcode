class Product {
    constructor(name, description, price) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(quantity) {
        return this.inStock += quantity
    }

    calculateDiscount(porcentagem) {
        return this.price = this.price - (this.price * (porcentagem/100))
    }
}

const murilo = new Product("ola", "produto teste", 1000)

console.log(murilo)

murilo.addToStock(10)
murilo.calculateDiscount(5)

console.log(murilo.inStock, murilo.price)