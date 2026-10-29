const db = require("../db/queries")
const { body, validationResult, matchedData } = require("express-validator")

async function getMessages(req, res) {
    messages = await db.getAllMessages()
    res.render("index", { messages: messages })
}

function displayForm(req, res) {
    res.render("form")
}

const validateMessage = [
    body("messageUser").trim()
        .notEmpty().withMessage("username is required!")
        .bail()
        .isAlpha().withMessage("The name should only be alphabets")
        .isLength({ min: 5, max: 15 }).withMessage("name should be in length between 5 to 15"),

    body("messageText").trim()
        .notEmpty().withMessage("Message Cannot be empty")
        .bail()
        .isLength({ max: 500 }).withMessage("Message cannot exceed 500 characters.")
];

const addMessage = [
    validateMessage,
    async (req, res) => {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).render("form", {errors: errors.array()})
        }

        let {messageUser,messageText} = matchedData(req)
        await db.addMessage(messageUser,messageText)
        res.redirect("/")
    }
];

async function getSpecificMessage(req, res) {
    const id = req.params.key;
    const message = await db.getSpecificMessage(id)

    if (!message) {
        return res.status(404).send("Message not found")
    }

    res.render("messageDetails", { message: message })
}

module.exports = {
    getMessages,
    displayForm,
    getSpecificMessage,
    addMessage
}