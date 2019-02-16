// *******NEW********//
const express = require('express');
const router = express.Router();
const body_parser = require('body-parser');


router.get('/comments', (req, res)=>{
    res.render('comments');
})

module.exports = router;


// *******OLD********//
// 
// var express = require('express');
// var router = express.Router();

// var body_parser = require('body-parser');

// var data = require('../data/comments.json');

// router.get('/comments', (req, res) => {
//     res.render('comments')
// });

// router.use(body_parser.urlencoded({extended: false}));

// router.post('/api', (req, res) => {
//     // AT LEAST TO TEST:
//     // res.send(req.body.name)
//     // FULL ONES BELOW:
//     var name = req.body.name;
//     var title = req.body.title;
//     var message = req.body.message;
    
//     res.send(`${name}${title}${message}`);
// })

// // router.get('/api', (req, res) =>{
// //     res.json(data);
// // })

// module.exports = router;