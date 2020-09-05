import React, { useState, useEffect } from 'react'
import Search from '../Components/SearchBar'
import SearchBar from '../Components/SearchBar'
import ResultsCard from '../Components/ResultsCard'
import NominationsCard from '../Components/NominationsCard'
import useAxiosGet from '../Hooks/Httprequests'
import { getMovies } from '../Services/omdbApi'
import { NominationContext } from '../Context/NominationContext'
import Banner from '../Components/Banner'
import { getNomunationsFromLocalStorage } from '../Utils/localStorage'

const Home = () => {
  const [searchQuery, setSearchQuery] = useState({
    searchText: '',
    movies: null,
  })

  const [nominations, setNominations] = useState(new Map())

  //Get the name of the movie the user has typed into the search bar
  const handleSearchText = (input) => {
    console.log(input)
    setSearchQuery({
      searchText: input,
      movies: null,
    })
  }

  useEffect(() => {
    //Implement debounce so that we wait 1 second after the last input, so we don't make uncecessary api calls on each keystroke
    const timer = setTimeout(() => {
      console.log(getMovies(searchQuery.searchText))
      getMovies(searchQuery.searchText).then((res) => {
        setSearchQuery({
          ...searchQuery,
          movies: res,
        })
      })
    }, 1000)

    //perform cleanup and cancel setTimeOut if 1 second has not passed before user types more
    return () => clearTimeout(timer)
  }, [searchQuery.searchText])

  return (
    <div>
      <h1>The Shoppies</h1>
      {nominations.size >= 5 && (
        <Banner numberOfNominations={nominations.size} />
      )}
      <NominationContext.Provider value={{ nominations, setNominations }}>
        <SearchBar onSearchChange={handleSearchText} />
        <ResultsCard searchQuery={searchQuery} />
        <NominationsCard nominations={nominations} />
      </NominationContext.Provider>
    </div>
  )
}

export default Home
