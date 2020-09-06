import React from 'react'
import { shallow } from 'enzyme'
import { Banner } from '../../Components/Banner'

describe('<Banner />', () => {
  it('should render Banner correctly', () => {
    const wrapper = shallow(<Banner numberOfNominations={5} />)

    expect(wrapper).toMatchSnapshot()
  })
})
