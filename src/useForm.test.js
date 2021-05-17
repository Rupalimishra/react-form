import React from 'react';
import { shallow } from 'enzyme';
import useForm from './useForm';

it("should render initial layout", () => {
    const component = shallow(<useForm />);
    expect(component.getElements()).toMatchSnapshot();
        
});