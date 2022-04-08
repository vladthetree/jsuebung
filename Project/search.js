const mongoose = require("mongoose");
const Player = require("./Player");// ./Folder inside Project folder

mongoose.connect("mongodb+srv://vladthetree:50account@cluster0.9fdym.mongodb.net/project");


run()

// async function run() {
//     try {
//         const player = await Player.findByName("namevalue5")
//         console.log(player)
//     } catch (e) {
//         console.log(e.message)
//     }
// }

// async function run() {
//     try {
//         const player = await Player.findByLevel(99)
//         console.log(player)
//     } catch (e) {
//         console.log(e.message)
//     }
// }

async function run() {
    try {
        const player = await Player.find().byName("namevalue0")
        console.log(player)
    } catch (e) {
        console.log(e.message)
    }
}