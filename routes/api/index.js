const router = require('express').Router(); // eslint-disable-line new-cap
const shiftRoutes = require('./shifts');
router.use('/shifts', shiftRoutes);

module.exports = router;
