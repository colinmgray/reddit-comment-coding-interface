'use strict';

let express = require('express');
let Controller = require('../controllers/UserController');
let router = express.Router();

router.get('/', Controller.loadMainPage.get);
router.get('/comment-analysis/:post_count', Controller.loadMainPage.get);
//router.get('/page/:page_number', Controller.login.get);
//router.post('/login', Controller.login.post);
//router.get('/:id/find-profile-by-id', Controller.findProfileById.get);
//router.get('/:first_name/:last_name/find-profile-by-name', Controller.findProfileByName.get);
//router.get('/:email/find-profile-by-email', Controller.findProfileByEmail.get);
//router.get('/search-user/:term', Controller.searchUser.get);

module.exports = router;