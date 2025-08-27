const Router = require('express')
const router = Router()

const BeforeAfterPic = require('./BeforeAfterRouter')
const EmailRouter = require('./EmaiRouter')
const TestRouter = require('./TestRouter')

router.use('/BeforeAfterPic',BeforeAfterPic)
router.use('/Email',EmailRouter)
router.use('/Test',TestRouter)

module.exports = router