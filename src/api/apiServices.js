import axios from 'axios'

export async function getWorkTime () {
  return axios.get('/progress/query/time')
}

export async function getImages () {
  return axios.get('/progress/query/images').then((result) => {
    return result.data
  })
}
