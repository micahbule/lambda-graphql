require('dotenv').config();

const winston = require('winston');

const app = require('./src/app');

app.set('port', process.env.PORT);

app.listen(
    app.get('port'),
    () => {
        winston.info(`GraphQL Server running at http://127.0.0.1:${app.get('port')}`);
    }
)