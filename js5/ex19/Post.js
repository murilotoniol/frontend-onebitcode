const Comment = require("./Comment.js")

class Post {
    constructor(author, title, body){
        this.author = author
        this.title = title
        this.body - body
        this.comments = []
    }

    addComment(author, comment) {
        this.comments.push(new Comment(author, comment))
    }
}

module.exports = Post