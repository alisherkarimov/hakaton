import axios from './axios'

const AuthServise = {
	register(user) {
		return axios.post('', {user})
	},
	login(user) {
		return axios.post('', {user})
	},
	getUser() {
		return axios.get('')
	},
}

export default AuthServise