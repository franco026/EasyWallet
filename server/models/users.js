const pg = require('pg');

const { Schema } = pg.Schema;

const UserSchema = new Schema(
    {
        Name: { type: String, require: true},
        Password: { type: String, require: true},
        Email: { type: String, require: true}
    }
);

module.exports = pg.model('User',UserSchema);