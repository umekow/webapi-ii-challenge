const router = require('express').Router();
const db = require('./db'); 


/***********POST***************/
//create new blog post
router.post('/', (req, res) => {
    db.insert(req.body)
    .then(r => res.json(r))
    .catch(error => console.log(error))
});

//create new comment
router.post('/:id/comments', (req, res) => {
    //{req.body, "post_id": Number(req.params.id)}

    db.insertComment({...req.body, "post_id": Number(req.params.id)})
    .then(r => res.json(r))
    .catch(error => console.log(error))
});


/******************GET*******************/

router.get('/', (req, res) => {
    db.find()
    .then(r => res.json(r))
    .catch(error => console.log(error))
}); 

router.get('/:id', (req, res) => {
    db.findById(req.params.id)
    .then(r => res.json(r))
    .catch(error => console.log(error))
});

router.get('/:id/comments', (req, res) => {
    db.findPostComments(req.params.id)
    .then(r => res.json(r))
    .catch(error => console.log(error))
});

/******************DELETE*******************/
router.delete('/:id', (req, res) => {
    db.remove(req.params.id)
    .then(r => res.json(r))
    .catch(error => console.log(error))
});

/******************PUT*******************/

router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
    .then (r => res.json(r))
    .catch(error => console.log(error))
}); 


module.exports = router; 