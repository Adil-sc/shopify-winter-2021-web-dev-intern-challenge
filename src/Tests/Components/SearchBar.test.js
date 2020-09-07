import React from 'react'
import { shallow } from 'enzyme'
import SearchBar from '../../Components/SearchBar'

describe('<SearchBar />', () => {
  it('should render SearchBar correctly', () => {
    const wrapper = shallow(<SearchBar />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should display input bar', () => {
    const wrapper = shallow(<SearchBar />)
    expect(wrapper.find('input').text()).toBe('')
  })
})
