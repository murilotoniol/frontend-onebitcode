class Account {
    #password
    #balance
    constructor(user) {
        this.email = user.email
        this.#password = user.password
        this.#balance = 0
    }

    getBalance(email, password){
        if(this.#authenticate(email, password)) {
            return this.#balance
        }
        return "Error"
    }

    setBalance(email, password, quantity){
        if(this.#authenticate(email, password)) {
            this.#balance = quantity
            return "Sucess"
        } else {
        return "Error!!!"
        }
    }

    #authenticate(email, password){
        return this.email === email && this.#password === password
    }
}

const user = {
    email: "pombissa@",
    password: "123",
}

const contaMurilo = new Account(user)
console.log(contaMurilo.setBalance("pombissa@", "123", 100000))
console.log(contaMurilo.getBalance("pombissa@", "123"))
console.log(contaMurilo.setBalance("pombissa@", "123", 999999999))
console.log(contaMurilo.getBalance("pombissa@", "123"))