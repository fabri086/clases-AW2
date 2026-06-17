import {Pool} from 'pg';

const pool = new Pool({
    host: '127.0.0.1',
    user: 'root',
    password: 'pass',
    database: 'admin',
    port: 5432,
})

export default pool