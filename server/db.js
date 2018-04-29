const environment = process.env.NODE_ENV || 'development'
const config = require('./../knexfile')[environment]
const db = require('knex')(config)

function getGrats() {
    db("grats")
    .select()
}

function saveGrats(grat) {
    db("grats")
    .insert({"grats": grat})
}

module.exports = {
    saveGrats,
    getGrats
}