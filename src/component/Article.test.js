import Article from "./Article";
import { shallow,mount } from "enzyme";
import Table from "./Table";

describe('about page testing',()=>{
    it.skip('click count',()=>{
        let wrapper = shallow(<Article/>)
        expect(wrapper.find('.clicks-0').length).toEqual(1)
        wrapper.find('button').simulate('click')
        expect(wrapper.find('.clicks-1').length).toEqual(2)
        wrapper.find('button').simulate('click')
        expect(wrapper.find('.clicks-2').length).toEqual(1)
        wrapper.find('button').simulate('click')
        expect(wrapper.find('.clicks-3').length).toEqual(1)
    })
    it('click 3 count',()=>{
        let wrapper = shallow(<Article/>)
        expect(wrapper.find('.clicks-0').length).toEqual(1)
        wrapper.find('button').simulate('click')
        wrapper.find('button').simulate('click')
        wrapper.find('button').simulate('click')
        expect(wrapper.find('.clicks-3').length).toEqual(1)
    })
    it('dive',()=>{
        let wrapper = shallow(<Article/>)
        expect(wrapper.find(Table).dive().find('.custom-border').length).toBe(1)
    })
    it('snapshot 1',()=>{
        let wrapper = shallow(<Table/>)
        expect(wrapper).toMatchSnapshot()
    })
})
describe('mount vs shallow',()=>{
    it('snapshot 2',()=>{
        let wrapper = mount(<Article/>)
        expect(wrapper).toMatchSnapshot() 
    })
})