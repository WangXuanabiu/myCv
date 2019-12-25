import Axios from 'axios'


export const instance = Axios.create({
    timeout: 300000
})

