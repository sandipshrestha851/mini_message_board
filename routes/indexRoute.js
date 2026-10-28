// const express = require("express")
const {Router} = require("express")
const indexRouter = Router()
const messageController = require("../controllers/messageController")

indexRouter.get("/",messageController.getMessages)

indexRouter.get("/new",messageController.displayForm)

indexRouter.post("/new",messageController.addMessage)

indexRouter.get("/message/:index",messageController.getSpecificMessage)

module.exports = indexRouter

