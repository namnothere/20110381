import { mygroup, MyGroup, groupIds } from '../models/index.js';
import { logger } from '../utils/index.js';
// import { MSSV } from '../models/mygroup.model.js';
export function studentController(req, res) {
  logger.info(`${req.method} request to ${req.url}`);
  const { id } = req.params;
  if (req.method === 'GET') {
    if (id) {
      const student = mygroup.find((student) => student.id === id);
      if (student) {
        return res.send(`<html><body><ul><li>${student.name}</li></ul></body></html>`);
      }
    }
    return res.status(400).json({ error: 'Not valid' });
  } else if (req.method === 'POST') {
    const newItem = req.body;
    if (!newItem.id || !newItem.name || mygroup.find((student) => student.id === newItem.id || !groupIds.includes(newItem.id))) {
      return res.status(400).json({ error: 'Not valid' });
    }
    mygroup.push(new MyGroup(newItem.id, newItem.name));
    return res.json({
      'success': true,
      'message': 'ok'
    });
  }
  return res.status(400).json({ error: 'Not valid' });
}
  