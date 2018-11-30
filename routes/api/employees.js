const router = require('express').Router(); // eslint-disable-line new-cap
const employeeController = require('../../controllers/employee');

router.get('/', employeeController.findAll);
router.get('/:id', employeeController.findOne);
router.post('/', employeeController.create);
router.put('/:id', employeeController.update);
router.delete('/:id', employeeController.delete);

module.exports = router;
