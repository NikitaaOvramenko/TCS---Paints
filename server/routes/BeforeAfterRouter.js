const Router = require('express')
const router = Router()

const controller = require('../controllers/BeforeAfterController')

router.get('/getAll',controller.getAll)
router.post('/create',controller.create)
router.get('/deleteAll',controller.deleteAll)


module.exports = router