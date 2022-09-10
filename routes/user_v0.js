const uuid = require('uuid')
const users = []

const create = (user) => {
	const id = uuid.v4()
	const saveUser = {... user, "id": id}
	users.push(saveUser)
	return saveUser
}

const read = () => {
}

const update = (id, user) => {
}

const remove = (id) => {
}

module.exports = {create} 
