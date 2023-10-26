const { Schema, model } = require('mongoose');

// Define the schema for the Merchant character
const merchantSchema = new Schema({
    discordId: { type: String, required: true, unique: true },
    gold: { type: Number, default: 0 },
    inventory: { type: [String], default: [] },
    level: { type: Number, default: 1 },
    experience: { type: Number, default: 0 },
    health: { type: Number, default: 100 },
    mana: { type: Number, default: 50 },
    strength: { type: Number, default: 10 },
    dexterity: { type: Number, default: 10 },
    intelligence: { type: Number, default: 10 },
});

// Define the Merchant model
module.exports = model('Merchant', merchantSchema);
