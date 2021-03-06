import * as express from 'express';
import { Application } from 'express';
import { getMessageById, getMessages } from './server/get-data.route';

const bodyParser = require('body-parser');
const app: Application = express();

app.use(bodyParser.json());

app.route('/api/messages').get(getMessages);
app.route('/api/messages/:id').get(getMessageById);

const httpServer = app.listen(9000, () => {
    console.log('HTTP REST API Server running at http://localhost:' + httpServer.address().port);
});
