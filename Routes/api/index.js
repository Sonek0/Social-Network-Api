// set requirements (Express Router)
const router = require('express').Router();

//set routes
const courseRoutes = require('./user-routes');
const studentRoutes = require('./thought-routes');

//add user and thoughts to routes
router.use('/users-routes', userRoutes);
router.use('/thoughts-routes', thoughtRoutes);

//Export Module router
module.exports = router;
