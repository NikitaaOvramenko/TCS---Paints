const EmailController = require('../controllers/EmailController')

const Router = require('express')
const router = Router()


router.post('/sendEmail',EmailController.sendEmail)

// router.get('/getAll',controller.getAll)
// router.post('/create',controller.create)
// router.get('/deleteAll',controller.deleteAll)


module.exports = router