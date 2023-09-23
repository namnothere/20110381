import express from 'express';
import { logger } from './utils/index.js';
import bodyParser from 'body-parser';

import router from './routes/index.js';

const app = express();

app.use(bodyParser.json());
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server running start for port: " + PORT))
logger.info(`Server started and running on http://localhost:${PORT}`)