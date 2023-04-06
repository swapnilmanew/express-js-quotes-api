const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');

// GET all quotes
router.get('/', quoteController.getAllQuotes);

// GET a single quote by ID
router.get('/:id', quoteController.getQuoteById);

// CREATE a new quote
router.post('/', quoteController.createQuote);

// UPDATE a quote by ID
router.put('/:id', quoteController.updateQuote);

// DELETE a quote by ID
router.delete('/:id', quoteController.deleteQuote);

module.exports = router;
