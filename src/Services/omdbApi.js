import axios from 'axios'

export const getMovies = async (searchText) => {
  const result = await axios
    .get(`http://www.omdbapi.com/?s=${searchText}&apikey=88d1e4a5`)
    .then((data) => {
      return data.data
    })

  return result.Search
}
