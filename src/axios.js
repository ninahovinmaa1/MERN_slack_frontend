import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://slack-clone-chat-app.herokuapp.com'
})

export default instance

//why axios: it converts the response immediately to json