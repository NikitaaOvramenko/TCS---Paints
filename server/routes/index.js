const Router = require('express')
const router = Router()

const BeforeAfterPic = require('./BeforeAfterRouter')
const EmailRouter = require('./EmaiRouter')

router.use('/BeforeAfterPic',BeforeAfterPic)
router.use('/Email',EmailRouter)

module.exports = router