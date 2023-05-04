import About from "./About";
import { shallow } from "enzyme";

describe('about page testing',()=>{
    it('class check',()=>{
        let wrapper = shallow(<About/>)
        expect(wrapper.exists('.h1cls')).toEqual(true)
    })
    it('state check',()=>{
        let wrapper = shallow(<About/>)
        expect(wrapper.state()).toEqual({name:'subro',id:111})
    })
    it('html check',()=>{
        let wrapper = shallow(<About/>)
        expect(wrapper.contains(<div className="h1cls">Hello</div>)).toEqual(true)
    })
    it('only msg check',()=>{
        let wrapper = shallow(<About/>)
        expect(wrapper.containsAllMatchingElements([<div>Hello</div>])).toEqual(true)
    })
    it('any msg check',()=>{
        let wrapper = shallow(<About/>)
        expect(wrapper.containsAnyMatchingElements([<div>Hello</div>,<div>Help</div>])).toEqual(true)
    })
})