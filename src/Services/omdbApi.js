import axios from 'axios'

export const getMovies = async (searchText) => {
  const result = await axios
    .get(
      `http://www.omdbapi.com/?s=${searchText}&apikey=${process.env.REACT_APP_API_KEY}`
    )
    .then((data) => {
      return data.data
    })

  return result.Search
}
