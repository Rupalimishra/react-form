import React from 'react';
import { mount, shallow } from 'enzyme';
import FormSignup from './FormSignup';

it('render text input', () => {
    const wrapper = mount(<FormSignup name='username' label="Username" />);
    const label = wrapper.find('label');
    expect(label).toHaveLength(4);
   
});

it('Should render an username input tag', () => {
    const wrapper = shallow(<FormSignup />);
    expect(wrapper.find('input[name="username"]').exists()).toBe(true);
});
it('Should render an email input tag', () => {
    const wrapper = shallow(<FormSignup />);
    expect(wrapper.find('input[name="email"]').exists()).toBe(true);
});
it('Should render an password input tag', () => {
    const wrapper = shallow(<FormSignup />);
    expect(wrapper.find('input[name="password"]').exists()).toBe(true);
});
it('Should render an password2 input tag', () => {
    const wrapper = shallow(<FormSignup />);
    expect(wrapper.find('input[name="password2"]').exists()).toBe(true);
});

it('Should render a submit button', () => {
const wrapper = shallow(<FormSignup />);
expect(wrapper.find('button[name="submit"]').exists()).toBe(true);
});

it('default value for the fields should be empty', () => {
  const wrapper = shallow(<FormSignup />);
  expect(wrapper.find('input[name="username"]').prop('value')).toBe('');
  expect(wrapper.find('input[name="email"]').prop('value')).toBe('');
  expect(wrapper.find('input[name="password"]').prop('value')).toBe('');
  expect(wrapper.find('input[name="password2"]').prop('value')).toBe('');

});

describe('<FormSignup />', () => {
let props, wrapper

beforeEach(() => {
    props = {
        handleSubmit: () => {

        },
    };
    wrapper = shallow(<FormSignup {...props} />);
});

it('should have form element', () => {
    expect(wrapper.find('form').length).toBe(1);
});
});


describe("render click button", () => {
    it("render  the button", () => {
        const wrapper = mount(<FormSignup>Sign up</FormSignup>);
        const button = wrapper.find('button');
        expect(button).toHaveLength(1);
        expect(button.prop('type')).toEqual('submit');
        expect(button.text()).toEqual('Sign up');
    });
});


