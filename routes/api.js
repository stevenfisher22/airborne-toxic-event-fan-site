var express = require('express');
var router = express.Router();
var data = require('../data/comments.json')
var bodyParser = require('body-parser');
var fs = require('fs');

router.get('/api', (req, res) => {
    res.json(data);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function(req, res) {
    // Unshift is like Concat but instead of the end it appends to the beginning (like to see the latest data first in a feedback page)
    data.unshift(req.body);
    fs.writeFile('../data/comments.json', JSON.stringify(data), 'utf8', function(err) {
        if (err) {
        console.log(err);
        }
    });
    res.json(data);
});

// 'DELETE BUTTON' SECTION
// router.delete('/api/:id', function(req, res) {
//     data.splice(req.params.id, 1);
//     fs.writeFile('app/data/comments.json', JSON.stringify(data), 'utf8', function(err) {
//     if (err) {
//         console.log(err);
//     }
//     });
//     res.json(data);
// });

module.exports = router;