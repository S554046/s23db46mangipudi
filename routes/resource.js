var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var fish_controller = require('../controllers/fish');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// fish ROUTES ///
// POST request for creating a fish.
router.post('/fish', fish_controller.fish_create_post);
// DELETE request to delete fish.
router.delete('/fish/:id', fish_controller.fish_delete);
// PUT request to update fish.
router.put('/fish/:id', fish_controller.fish_update_put);
// GET request for one fish.
router.get('/fish/:id', fish_controller.fish_detail);
// GET request for list of all fish items.
router.get('/fish', fish_controller.fish_list);
module.exports = router;