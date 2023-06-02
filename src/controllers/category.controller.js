const { v4: uuid} = require('uuid')
const Io = require('../utils/Io');

const Books = new Io('./database/books.json');
const Categories = new Io('./database/categories.json');

const addCategory = async (req,res) => {
    const {name} = req.body;
    const id = uuid();
    const categories = await Categories.read();
    const data = categories.length ? [...categories, {id, name}] : [{id, name}];

    await Categories.write(data);

    res.status(201).json({message:'Success'})
};

const findByCategory = async (req,res) => {
    const books = await Books.read();
    const {theCategory} = req.body;
    const newBooks = books.filter( n => n.category == theCategory)
    res.status(200).json(newBooks)
}

module.exports = {
    addCategory,
    findByCategory
}