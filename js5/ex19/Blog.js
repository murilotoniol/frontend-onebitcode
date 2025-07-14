const Author = require("./Author.js")

const murilo = new Author("Murilo")
const post1 = murilo.createPost(murilo, "Testando", "Ola, estou testando POO")

post1.addComment(murilo, "Agora testando o comentario")

console.log(murilo)
console.log(post1)