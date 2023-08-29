import axios from 'axios'

export const client = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWZhZWwucmFmYWVsMkByYWZhZWwuY29tIiwiaWF0IjoxNjc5ODExNDUyLCJleHAiOjE2Nzk4MTI4OTJ9.VRtSLj9ovYwR5l4kkxX7iewm31G43vK92nxI2R1KymI'
    },
})
