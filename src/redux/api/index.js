import axios from 'axios'

const baseUrl = 'http://www.omdbapi.com/?apikey=16ec4c35&'

export const apiCall = (url, data, headers, method) => axios({
   method,
   url: baseUrl + url,
   data,
   headers
})