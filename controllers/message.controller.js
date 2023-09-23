import { mygroup } from '../models/index.js';
import { logger } from '../utils/index.js';
export function messageController(req, res) {
  logger.info(`${req.method} request to ${req.url}`);
  const { id } = req.params;
  let html = '';
  if (id) {
    const student = mygroup.find((student) => student.id === id);
    if (student) {
      return res.send(`<html><body><ul><li>${student.name}</li></ul></body></html>`);
    }
  } else {
    mygroup.map((student) => {
      html += `<html><body><ul><li>${student.name}</li></ul></body></html>`;
    })
    return res.send(html);
  }
  return res.status(400).json({ error: 'Not valid' });
}
  