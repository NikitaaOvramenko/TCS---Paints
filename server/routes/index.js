const Router = require('express')
const router = Router()

const BeforeAfterPic = require('./BeforeAfterRouter')

router.use('/BeforeAfterPic',BeforeAfterPic)

module.exports = router