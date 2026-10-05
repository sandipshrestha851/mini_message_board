// const express = require("express")
const {Router} = require("express")
const indexRouter = Router()

const messages = [
    {
        text: "Hi Aryan!",
        user: "Christan",
        added: new Date()
    },
    {
        text: "What is going on!",
        user: "Aryan",
        added: new Date()
    },
    {
        text: "Hello guys",
        user: "Sandy",
        added: new Date()
    },

]

indexRouter.get("/",(req,res)=>{
    res.render("index",{messages:messages})
})

indexRouter.get("/new",(req,res)=>{
    res.render("form")
})

indexRouter.post("/new",(req,res)=>{
    let messageText = req.body.messageText
    let messageUser = req.body.messageUser
    messages.push({text:messageText , user: messageUser , added: new Date()})
    res.redirect("/")
})

indexRouter.get("/message/:index",(req,res)=>{
    const index = Number(req.params.index);
    const message = messages[index];

    if (!message) {
        return res.status(404).send("Message not found");
    }

    res.render("messageDetails", {
        text: message.text,
        user: message.user,
        added: message.added
    });
})

module.exports = indexRouter

