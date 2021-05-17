import React from "react";
import { shallow } from 'enzyme';
import FormSuccess from './FormSuccess';

it("render success message", () => {
 const wrapper = shallow(<FormSuccess />);
 const message = (<h1 className='form-success'>We have received your request!</h1>);
 expect(wrapper.contains(message)).toEqual(true);
});