const {v4: uuid} = require('uuid')
const Io = require('../utils/Io');
const book = require('../models/book')

const Books = new Io('./database/books.json');
const Categories = new Io('./database/categories.json');

const getAll = async (req,res) => {
    const books = await Books.read();
    const categories = await Categories.read();
    for (let i = 0; i < books.length; i++) {
        for (let j = 0; j < categories.length; j++) {
            if (books[i].category == categories[j].name) {
                books[i].category = categories[j];
            }
            
        }
        
    }
    res.status(200).json(books);
}

const addBook = async (req,res) => {
    const {name, author, year, content, category} = req.body;
    const {cover} = req.files;

    const books = await Books.read();
    const id = uuid();
    const coverName = `${uuid()}.${cover.mimetype.split('/')[1]}`;

    cover.mv(process.cwd() + `/uploads/${coverName}`);
    
    const newBook = new book (id, name, author, year, content, category, coverName);

    const data = books.length ? [...books, newBook] : [newBook];

    await Books.write(data);

    res.status(201).json({message: 'Success'})
};




module.exports = {
    getAll,
    addBook,
}