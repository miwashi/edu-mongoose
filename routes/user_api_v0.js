const router = require('express').Router()
const {create} = require('./user_v1.js')
router.get('/', (req, res) => {
	res.status(200).send('ok')
})

router.put('/:id', (req, res) => {
	console.log(req.param.id)
	console.og(req.body)
        res.status(200).send('ok')
})

router.post('/', (req, res) => {
	const user = create(req.body)
    res.status(200).send(user)
})

router.delete('/:id', (req, res) => {
	console.log(req.param.id)
        res.status(200).send('ok')
})

module.exports = router
