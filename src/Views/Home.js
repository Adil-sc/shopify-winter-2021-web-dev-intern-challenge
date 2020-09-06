import React, { useState, useEffect } from 'react'
import SearchBar from '../Components/SearchBar'
import ResultsCard from '../Components/ResultsCard'
import NominationsCard from '../Components/NominationsCard'
import { getMovies } from '../Services/omdbApi'
import { NominationContext } from '../Context/NominationContext'
import Banner from '../Components/Banner'
import { getNominationsFromLocalStorage } from '../Utils/localStorage'
require('dotenv').config()

const Home = () => {
  const [searchQuery, setSearchQuery] = useState({
    searchText: '',
    movies: null,
  })

  const [nominations, setNominations] = useState(new Map())

  useEffect(() => {
    setNominations(getNominationsFromLocalStorage())
  }, [])

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
    <div className="">
      <div className="ml-64 mr-64 pb-4">
        {nominations.size >= 5 && (
          <Banner numberOfNominations={nominations.size} />
        )}
      </div>
      <h1 className="text-3xl font-bold mb-4 mt-8 ml-64">The Shoppies</h1>

      <NominationContext.Provider value={{ nominations, setNominations }}>
        <div className="ml-64 mr-64">
          <SearchBar onSearchChange={handleSearchText} />
        </div>
        <div className="flex justify-between ml-64 mr-64 min-h-full">
          <div className="w-1/2 mr-2">
            <ResultsCard searchQuery={searchQuery} />
          </div>
          <div className="w-1/2 ml-2">
            <NominationsCard nominations={nominations} />
          </div>
        </div>
      </NominationContext.Provider>
    </div>
  )
}

export default Home
