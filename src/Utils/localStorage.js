export const getNominationsFromLocalStorage = () => {
  let previouslyNominatedMovies = new Map()

  const locallyStoredNominatedMovies = { ...localStorage }

  Object.keys(locallyStoredNominatedMovies).forEach((imdbID) => {
    previouslyNominatedMovies.set(imdbID, JSON.parse(localStorage[imdbID]))
  })

  return previouslyNominatedMovies
}

export const addNominationToLocalStorage = (k, v) => {
  localStorage.setItem(k, v)
}

export const removeNominationFromLocalStorage = (imdbID) => {
  localStorage.removeItem(imdbID)
}
