const pg = require('pg')
const {Pool} = pg
//objeto de configuracion
const config = {
    user: 'postgres',
    host: 'localhost',
    password: '1234',
    database: 'bancosolar',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 5000,
    connectionTimeoutMillis: 2000,
}

const pool = new Pool(config)

async function neevosuario (){
    
}



