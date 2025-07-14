class Book {
    constructor(title) {
        this.title = title
        this.published = false
    }

    publish() {
        this.published = true
    }
}

const murilo = new Book("Ola mundo")
murilo.publish()
console.log(murilo)