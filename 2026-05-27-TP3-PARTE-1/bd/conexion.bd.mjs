import pg from 'pg'

const pool = new pg.Pool({
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    database: process.env.BD_BD,
    port: process.env.BD_PORT

})

export default pool

/* const pool = new pg.Pool({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 5432
})
    */