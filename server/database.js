const pg = require('pg');

const URI = "postgres://postgres:postgres@localhost:5433/EasyWallet";

const client = new pg.Client(URI);

client.connect()
    .then(db => console.log('BD is connected'))
    .catch(err => console.error(err));

module.exports = client;
