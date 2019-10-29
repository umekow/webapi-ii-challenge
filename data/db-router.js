const router = require('express').Router();

const db = require('./db'); 

/***********POST***************/
//create new blog post
router.post('/', (req, res) => {
    db.insert(req.body)
    .then(r => res.json(r))
    .catch(error => console.log(error))
})

//create new comment
router.post('/:id/comments', (req, res) => {
    //{req.body, "post_id": Number(req.params.id)}

    db.insertComment({...req.body, "post_id": Number(req.params.id)})
    .then(r => res.json(r))
    .catch(error => console.log(error))
})



module.exports = router; 