const Address = require("./Address")
const Person = require("./Person")

const endereco = new Address("Rua Marciano Halchuk", "356", "Vila Bosque", "Maringá", "Paraná")
const murilo = new Person("Murilo", endereco)

console.log(murilo.address.fullAddress())