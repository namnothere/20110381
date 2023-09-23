import { mygroup } from '../models/index.js';
import { logger } from '../utils/index.js';

export function mygroupController(req, res) {
  logger.info(`${req.method} request to ${req.url}`); 
  return res.json(mygroup);
};
