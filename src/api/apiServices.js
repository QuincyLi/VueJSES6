import axios from 'axios'

export async function getWorkTime () {
  return axios.get('/progress/query/time')
}
