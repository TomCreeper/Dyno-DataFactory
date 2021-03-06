'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoroleSchema = new Schema({
	guild:       { type: String, required: true, index: true },
	user:        { type: String, required: true, index: true },
	role:        { type: String, required: true },
	duration:    { type: Number, required: true },
	createdAt:   { type: Date, default: Date.now, expires: '48h' },
});

module.exports = mongoose.model('Autorole', autoroleSchema);
