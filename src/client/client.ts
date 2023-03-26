import axios from 'axios'

export const client = axios.create({
    baseURL: 'http://127.0.0.1:8080/api/',
    headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWZhZWwucmFmYWVsQHJhZmFlbC5jb20iLCJpYXQiOjE2Nzk4MDk3NDAsImV4cCI6MTY3OTgxMTE4MH0.VexI1aCKv43omatoxRphd2Pte46Df4ts6fJ1hqSPR5U'
    },
})
