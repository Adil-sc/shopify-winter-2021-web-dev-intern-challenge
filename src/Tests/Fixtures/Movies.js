export const nominations = new Map()

export const emptyNominations = new Map()

export const movie = {
  Poster:
    'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  Title: 'Batman Begins',
  Type: 'movie',
  Year: '2005',
  imdbID: 'tt0372784',
}

nominations.set('tt0372784', movie)

export const searchQuery = {
  searchText: 'Batman',
  movies: [movie],
}

export const emptySearchQuery = {
  searchText: '',
  movies: null,
}
