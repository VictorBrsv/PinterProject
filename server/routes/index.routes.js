const router = require('express').Router();

const authApiRoute = require('./api/auth.routes.js')

router.use('/api/auth', authApiRoute)

module.exports = router