//Get from local storage

export const getNomunationsFromLocalStorage = () => {
  let previouslyNominatedMovies = new Map()

  const locallyStoredNominatedMovies = { ...localStorage }

  //   console.log(Object.keys(items))
  Object.keys(locallyStoredNominatedMovies).forEach((imdbID) => {
    previouslyNominatedMovies.set(imdbID, JSON.parse(localStorage[imdbID]))
  })

  return previouslyNominatedMovies
}

//Set local storage
export const addNominationToLocalStorage = (k, v) => {
  localStorage.setItem(k, v)
}

//Remove local stroage
export const removeNominationFromLocalStorage = (imdbID) => {
  localStorage.removeItem(imdbID)
}
