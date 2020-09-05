//Get from local storage

export const getNomunationsFromLocalStorage = () => {
  let movieMap = new Map()

  const items = { ...localStorage }

  //   console.log(Object.keys(items))
  Object.keys(items).forEach((item) => {
    movieMap.set(item, JSON.parse(localStorage[item]))
  })

  return movieMap
  // let keys = Object.keys(localStorage)
  // i = keys.length

  // while(i--){

  // }
}

//Set local storage
export const addNominationToLocalStorage = (k, v) => {
  localStorage.setItem(k, v)
}

//Remove local stroage
