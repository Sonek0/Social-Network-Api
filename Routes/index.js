
const router = require('express').Router();
const apiRoutes = require('./api');

//add prefix to all api routes
router.use('/api', apiRoutes);

//Wrong route used
router.use((req, res) => res.send('Wrong route!'));

//Module exports
module.exports = router;
