const mongoose = require('../db/connection')
const express = require('express')
const userSchema = new mongoose.Schema({})

module.exports = mongoose.model('User', userSchema)
