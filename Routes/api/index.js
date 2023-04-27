// set requirements (Express Router)
const router = require('express').Router();

//set routes
const courseRoutes = require('./user-routes');
const studentRoutes = require('./thought-routes');

//add user and thoughts to routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

//Export Module router
module.exports = router;
