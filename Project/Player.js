const mongoose = require("mongoose");

const saveGameSchema = new mongoose.Schema({
    dateOfSavegame: {
        type: Date,
        immutable: true,
        default: () => Date.now(),
    }
})

const playerSchema = new mongoose.Schema(
    {

        name: { //dadurch kann man ein Attribute spezifizieren
            type: String,
            require: true,
            lowercase: true,
        },
        level: {
            type: Number,
            min: 0,
            max: 100
        },
        createdAt: {
            type: Date,
            immutable: true, // durch default & immutable bleibt das anfangs Datum, lässt sich nicht mehr ändern
            default: () => Date.now(),
        },
        updatedAt: {
            type: Date,
            default: () => Date.now(),
        },
        // saveGame: mongoose.SchemaTypes.ObjectId,
        saveGame: saveGameSchema,

    })
//Collection Player
//module.exports macht überall nutzbar

playerSchema.methods.sayHi = function () {
    console.log("Hi, my name is " + this.name)
}

playerSchema.statics.findByName = function (name) {
    return this.find({
        name: new RegExp(name, 'i')
    })
}
playerSchema.statics.findByLevel = function (level) {
    return this.find({
        level: level
    })
}
// TODO : sollen die querys static oder query method sein ?

//damit lässt sich die query spezifizieren.
playerSchema.query.byName = function (name) {
    return this.where({
        name: new RegExp(name, 'i')
    })
}


module.exports = mongoose.model("Player", playerSchema)