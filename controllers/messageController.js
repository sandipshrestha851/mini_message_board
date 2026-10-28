const db = require("../db/queries")

async function getMessages(req,res){
    messages = await db.getAllMessages()
    res.render("index",{messages:messages})
}

function displayForm(req,res){
    res.render("form")
}

async function addMessage(req,res){
    let username = req.body.messageUser
    let message = req.body.messageText
    await db.addMessage(username,message)
    res.redirect("/")
}

async function getSpecificMessage(req,res){
    const id = req.query.key;
    const message = await db.getSpecificMessage(id)
    
    if(!message){
        return res.status(404).send("Message not found")
    }

    res.render("messageDetails",{message:message})
}

module.exports = {
    getMessages,
    displayForm,
    addMessage,
    getSpecificMessage
}