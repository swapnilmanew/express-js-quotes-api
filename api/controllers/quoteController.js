const Quote = require('../models/quote_model.js');

const QuoteController = {
  getAllQuotes: (req, res) => {
    Quote.find((err, quotes) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else {
        res.json(quotes);
      }
    });
  },

  getQuoteById: (req, res) => {
    const id = req.params.id;
    Quote.findById(id, (err, quote) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else if (!quote) {
        res.status(404).send('Quote not found');
      } else {
        res.json(quote);
      }
    });
  },

  addQuote: (req, res) => {
    const quote = new Quote(req.body);
    quote.save((err, newQuote) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else {
        res.status(201).json(newQuote);
      }
    });
  },

  updateQuote: (req, res) => {
    const id = req.params.id;
    const updatedQuote = req.body;
    Quote.findByIdAndUpdate(
      id,
      updatedQuote,
      { new: true },
      (err, updatedQuote) => {
        if (err) {
          console.error(err);
          res.status(500).send('Internal server error');
        } else if (!updatedQuote) {
          res.status(404).send('Quote not found');
        } else {
          res.json(updatedQuote);
        }
      }
    );
  },

  deleteQuote: (req, res) => {
    const id = req.params.id;
    Quote.findByIdAndDelete(id, (err, deletedQuote) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else if (!deletedQuote) {
        res.status(404).send('Quote not found');
      } else {
        res.status(204).send();
      }
    });
  },
};

module.exports = QuoteController;
