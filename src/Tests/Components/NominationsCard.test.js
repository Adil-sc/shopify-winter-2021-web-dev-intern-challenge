import React from 'react'
import { shallow } from 'enzyme'
import { NominationsCard } from '../../Components/NominationsCard'
import { nominations, emptyNominations } from '../Fixtures/Movies'

describe('<NominationsCard />', () => {
  it('should render empty NominationsCard correctly', () => {
    const wrapper = shallow(<NominationsCard nominations={emptyNominations} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should display <NominatedMovieItem /> if nominations exist', () => {
    const wrapper = shallow(<NominationsCard nominations={nominations} />)
    expect(wrapper.find('#displayNominations').text()).toBe(
      '<NominatedMovieItem />'
    )
  })
})
