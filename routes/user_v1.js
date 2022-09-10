const mongoose = require('mongoose')

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}

const create = (user) => {
	const id ="newid"
	const saveUser = {... user, "id": id}
	return saveUser
}

const read = () => {
}

const update = (id, user) => {
}

const remove = (id) => {
}

module.exports = {create} 
