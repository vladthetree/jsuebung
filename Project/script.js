const mongoose = require("mongoose");
const Player = require("./Player");// ./Folder inside Project folder

mongoose.connect("mongodb+srv://vladthetree:50account@cluster0.9fdym.mongodb.net/project");

//user.save() ist eine async Function
run()

async function run() {


    try {
        // const player = new Player({name: "nameValue0", level: 999})
        // await player.save()
        var date = Date.now();
        const player = await Player.create({
            name: "nameValue5",
            level: 15,
        }) //same
        player.sayHi()
        console.log(player)
    } catch (e) {
        console.log(e.message);
    }
}