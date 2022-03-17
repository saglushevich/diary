const Router = require("express");
const User = require('../models/User')
const Schedule = require('../models/Schedule')
const Note = require('../models/Note')
const Contact = require('../models/Contact')
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")
const router = new Router()

//РЕГИСТРАЦИЯ
router.post('/registration', async (req, res) => {
    try {
        console.log(req.body)
        const {name, password} = req.body;

        const candidate = await User.findOne({name})

        if(candidate) {
            return res.status(400).json({message: `User with name ${name} already exist`})
        }

        const hashPassword = await bcrypt.hash(password, 8)
        const user = new User({name, password: hashPassword})
        await user.save()
        return res.status(200).json({message: 'User was created'})
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

//АВТОРИЗАЦИЯ
router.post('/login', async (req, res) => {
    try {
        const {name, password} = req.body
            const user = await User.findOne({name})
            if (!user) {
                return res.status(404).json({message: "User not found"})
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({message: "Invalid password"})
            }
            const token = jwt.sign({id: user.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    name: user.name
                }
            })
    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

//СОЗДАНИЕ ЗАПИСИ
router.post('/note', async (req, res) => {
    try {
        const {title, owner, description, important, date} = req.body;

        const note = new Note({title, owner, description, important, date})
        await note.save()

    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

//ПОЛУЧЕНИЕ ЗАПИСЕЙ ПОЛЬЗОВАТЕЛЯ
router.get('/getNotes/:owner', async (req,res) => {
    try {
        const {owner} = req.params;
        const note = await Note.find({owner})
        if (!note) {
            return res.status(404).json({message: "Note not found"})
        }
        const token = jwt.sign({id: note.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                note
        })

    } catch (error) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

//УДАЛЕНИЕ ЗАПИСИ
router.delete('/note/:_id', async (req, res) => {
    const {_id} = req.params;
    const notes = await Note.findByIdAndDelete({_id})
    return res.json({notes})
})

//ИЗМЕНЕНИЕ ЗАПИСИ
router.put('/updateNote/:_id', async (req, res) => {
    const {_id} = req.params;
    const {changes} = req.body;
    const note = await Note.findByIdAndUpdate({_id}, changes, {returnDocument: "after"})
    await note.save();
})

//СОЗДАНИЕ КОНТАКТА
router.post('/contact', async (req, res) => {
    try {
        const {title, owner, phone} = req.body;

        const contact = new Contact({title, owner, phone})
        await contact.save()

    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

//ПОЛУЧЕНИЕ КОНТАКТОВ
router.get('/getContacts/:owner', async (req,res) => {
    try {
        const {owner} = req.params;
        const contact = await Contact.find({owner})
        if (!contact) {
            return res.status(404).json({message: "Contact not found"})
        }
        const token = jwt.sign({id: contact.id}, config.get("secretKey"), {expiresIn: "1h"})
            return res.json({
                token,
                contact
        })

    } catch (error) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

//УДАЛЕНИЕ ЗАПИСИ
router.delete('/contact/:_id', async (req, res) => {
    const {_id} = req.params;
    const contact = await Contact.findByIdAndDelete({_id})
    return res.json({contact})
})

//ИЗМЕНЕНИЕ КОНТАКТА
router.put('/updateContact/:_id', async (req, res) => {
    const {_id} = req.params;
    const {changes} = req.body;
    const contact = await Contact.findByIdAndUpdate({_id}, changes, {returnDocument: "after"})
    await contact.save();
})

module.exports = router