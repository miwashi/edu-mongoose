const mongoose = require('mongoose')

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://root:root@localhost:27017/test');
}

const userSchema = new mongoose.Schema({
	name: String
});
const User = mongoose.model('User', userSchema);

const create = (user) => {
	const savedUser = new User({ name: user.fullName });
	return savedUser
}

const read = () => {
}

const update = (id, user) => {
}

const remove = (id) => {
}

module.exports = {create} 
