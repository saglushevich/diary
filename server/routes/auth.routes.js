const Router = require("express");
const User = require('../models/User')
const bcrypt = require("bcryptjs")
const config = require("config")
const router = new Router()
const jwt = require("jsonwebtoken")

//РЕГИСТРАЦИЯ
router.post('/registration', async (req, res) => {
    try {
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

//ПРЕОБРАЗОВАНИЕ ДАННЫХ: ДОБАВЛЕНИЕ ЗАПИСЕЙ, УДАЛЕНИЕ, ИЗМЕНЕНИЕ СОСТОЯНИЯ
router.put('/update/:_id', async (req, res) => {
    try {
        const {_id} = req.params;
        const {changes} = req.body;

        const user = await User.findByIdAndUpdate({_id}, changes, {returnDocument: "after"})
        await user.save();

    } catch (error) {
        res.send({message: "Server error"})
    }
})


//ПОЛУЧЕНИЕ ДАННЫХ ОБ ПОЛЬЗОВАТЕЛЕ ИЗ БД
router.get('/user/:_id', async (req, res) => {
    try {
        const {_id} = req.params;
        const user = await User.findOne({_id})

        return res.json({user})
    } catch (error) {
        res.send({message: "Server error"})
    }
})

module.exports = router