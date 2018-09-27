const User = require('../database');
const Usercontr = {};

Usercontr.getUsers = async (req, res) =>{
    const users = await User.query('SELECT * FROM usuarios');
    res.json(users.rows);
}

Usercontr.createUser = async (req, res) => {
    const dataUser = {Name: req.body.Name, Password: req.body.Password, Email: req.body.Email};
    //console.log(req);
    console.log([dataUser.Name, dataUser.Password, dataUser.Email]);

    const user = await User.query('INSERT INTO usuarios("Name", "Password", "Email") '+
    'VALUES($1, $2, $3) RETURNING *', [dataUser.Name, dataUser.Password, dataUser.Email]);
    res.json('received');

}

Usercontr.getUser = async (req, res) =>{
    const useri = await User.query('SELECT * FROM usuarios WHERE id = $1', [req.params.id]);
    res.json(useri.rows);

}

Usercontr.editUser = async (req, res) =>{
    const id  = req.params.id;
    const editu = {name: req.body.name, password: req.body.password};
    console.log("hola "+req.body.name);
    const update = await User.query(
         'UPDATE usuarios SET "Name" = ($2), "Password"=($3) WHERE id = ($1)',
         [id, editu.name, editu.password]);
    res.json({
        status:'se actualizo  ia '+req.body.name
    });
}


module.exports = Usercontr;