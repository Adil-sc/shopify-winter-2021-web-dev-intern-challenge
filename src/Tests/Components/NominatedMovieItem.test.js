import React from 'react'
import { shallow, mount } from 'enzyme'
import { NominatedMovieItem } from '../../Components/NominatedMovieItem'
import { NominationContext } from '../../Context/NominationContext'
import { nominations, movie } from '../Fixtures/Movies'

describe('<NominatedMovieItem />', () => {
  it('should render <NominatedMovieItem /> with movie title and year', () => {
    const wrapper = mount(
      <NominationContext.Provider value={{ nominations }}>
        <NominatedMovieItem movie={movie} />
      </NominationContext.Provider>
    )

    expect(wrapper.find('li').text()).toBe('Batman Begins (2005)')
  })
})
