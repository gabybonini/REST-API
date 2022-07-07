// Banco de dados usado somente para testes.

const pgp = require('pg-promise')();
const db = pgp({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    database: 'db_api'
})

module.exports = db;