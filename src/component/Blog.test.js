import Blog from "./Blog";
import { shallow } from "enzyme";

describe('blog page testing',()=>{
    it('find check',()=>{
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find('.licls').length).toBe(3)
    })
    it('at & key check',()=>{
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find('.licls').at(0).key()).toBe('angular')
    })
    it('child check',()=>{
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find('.numbers').childAt(0).type()).toBe('span')
    })
    it('child length check',()=>{
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find('ul').children().length).toBe(3)
    })
    it('has class check',()=>{
        let wrapper = shallow(<Blog/>)
        expect(wrapper.find('.my-button').hasClass('disabled')).toBe(true)
    })
    it('is check',()=>{
        let wrapper = shallow(<Blog/>)
        expect(wrapper.is('.main')).toBe(true)
    })
})