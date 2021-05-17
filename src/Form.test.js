import { shallow } from 'enzyme';
import React, { Component } from 'react';
import Form from './Form';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess' ;
import { findByTestAttr } from '../test/testUtils';



it("should render initial layout", () => {
    
    const component = shallow(<Form />);
    expect(component.getElements()).toMatchSnapshot();
});

describe("render the success component", () => {
    it("render FormSuccess component length", () => {
        expect(shallow(<FormSuccess />).length).toEqual(1);   
     });
     it("render the FormSignup component", () => {
         expect(shallow(<FormSignup />).length).toEqual(1);
     });
});

const setup = () => {
    return shallow(<Form />);
}

it('form render', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'form-container');
  expect(inputComponent.length).toBe(0);
})



