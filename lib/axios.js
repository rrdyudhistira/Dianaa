import axios from 'axios'

export default axios.create({
    baseURL:'https://rivaldi-annisa.dgtl-invite.com/public',
    // Headers:{
    //     'X-Requested-With': 'XMLHttpRequest'
    // },
    // withCredentials: true
})