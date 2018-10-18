    const express = require('express');
    const cors = require('cors');
    const morgan = require('morgan');
    const app = express();
    var bodyParser = require('body-parser');
    const db = require('./database');

    //setting server d
    app.set('port', process.env.PORT || 3000);
/** 
    db.sequelize.sync({force: true}).then(() => {
        console.log('Drop and Resync with { force: true }');
    });*/

    //Middlewares
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(cors({origin: 'http://localhost:4200'}));
    app.use(bodyParser.json()); 
    app.use(bodyParser.urlencoded({ extended: true}));



    //Routes
    app.use('/api/users' , require('./routes/users.routes'));


<<<<<<< HEAD

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
=======
    // Starting the server
    app.listen(     app.get('port'), () => {
        console.log('serve on port', app.get('port'));
    });
>>>>>>> master
