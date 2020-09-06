import React from 'react'
import { shallow, mount } from 'enzyme'
import { MovieItem } from '../../Components/MovieItem'
import { NominationContext } from '../../Context/NominationContext'
import { nominations, movie } from '../Fixtures/Movies'

describe('<MovieItem />', () => {
  it('should render <MovieItem /> with movie title and year', () => {
    const wrapper = mount(
      <NominationContext.Provider value={{ nominations }}>
        <MovieItem movie={movie} />
      </NominationContext.Provider>
    )

    expect(wrapper.find('li').text()).toBe('Batman Begins (2005)')
  })
})
