class Book {
    constructor (id, name, author, year, content, category, cover) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.year = year;
        this.content = content;
        this.category = category;
        this.cover = cover;
    }
}

module.exports = Book;