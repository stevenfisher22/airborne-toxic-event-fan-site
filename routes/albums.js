var express = require('express');
var router = express.Router();

// var data = require('../data/data.json')

router.get('/albums', (req, res) => {
    // var albumData = data.albums;
    // var count = 0;
    // albumData.forEach((item) => {
    //     albumCovers

    //     html += `
    //         <li>
    //             <h2><a href='/albums/${count}'>${item.name}</a> by ${item.artist}</h2>
    //             <a href='/albums/${count}'><img src='images/${item.artwork}'></a>
    //             <p>${item.summary}</p>
    //         </li>
    //     `
    //     count++;
    // })

    res.render('albums');
});

module.exports = router;