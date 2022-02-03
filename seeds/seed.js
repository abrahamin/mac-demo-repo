const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost', {
    useNewUrlParser: true,
});

const testSeed = [
    {
        day: new Date(new Date().setDate(new Date().getDate())),
        test: [
          {
            name: 'Test Seed',
          },
        ],
      },
]
