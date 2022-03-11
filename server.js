const express = require('express');
const { Pool } = require('pg/lib');
const app = express(
    
);

app.use(express.static('static'))



async function transferencias() {
    const 
}


app.post('transferencia', async (req, res) => {
    let body = ""

    res.on("data", res)
    
});



async function hacer_transferencia(emisor, receptor, monto) {
    const client = await pool.connect()
    const res = await client.query({
        Text "select * from usuarios where nombre= $1"
        values: [emisor_nombre]
    })
    const emisor = res.rows[0]
}



app.listen(3000, () => console.log('Servidor en puerto 3000'))