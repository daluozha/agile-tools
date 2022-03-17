const express = require('express')

const router = express.Router()

router.all('/list', (req, res) => {
    res.json({
        list: 'list',
        method: req.method
    })
})

module.exports = router