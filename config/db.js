const {createPool}  = require("mysql");

const pool = createPool({
    port:process.env.DB_PORT,
    host: process.env.DB_HOST,
    user:process.env.db_user,
    password:process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit: 10
});

module.exports=pool