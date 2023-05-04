import Home from './Home'
import { shallow } from 'enzyme'

describe('shallow home page',()=>{
    it('object check',()=>{
        const wrapper=shallow(<Home/>)
        expect(wrapper.exists('.home')).toEqual(true)
    })
})