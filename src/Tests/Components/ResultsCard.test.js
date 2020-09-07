import React from 'react'
import { shallow } from 'enzyme'
import { ResultsCard } from '../../Components/ResultsCard'
import { searchQuery, emptySearchQuery } from '../Fixtures/Movies'

describe('<ResultsCard />', () => {
  it('should render empty ResultsCard correctly', () => {
    const wrapper = shallow(
      <ResultsCard searchQuery={emptySearchQuery} handleLoading={false} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render <MovieItem /> if there is a movie in searchQuery', () => {
    const wrapper = shallow(
      <ResultsCard searchQuery={searchQuery} handleLoading={false} />
    )
    expect(wrapper.find('#displayResults').text()).toEqual('<MovieItem />')
  })
})
