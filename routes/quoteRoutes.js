import controller from '../controller/quoteController.js';
import e from 'express';

export const router = e.Router();

router.post('/create', controller.createQuote);
router.get('/',controller.getQuotes)
// router.get('/', (req, res) => {
//     res.send('Hello from User Route')
// })