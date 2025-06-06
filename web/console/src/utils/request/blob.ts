import axios from 'axios'
export default function downFileToblob(url) {
  return axios({
    url,
    methods: 'get',
    headers: {
      'Cache-Control': 'no-cache',
    },
    responseType: 'blob',
  }).then((res) => {
    if (res.status !== 200)
      return Promise.reject('request Blob fail!')
    return res.data
  })
}
