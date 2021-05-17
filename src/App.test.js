import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Form from './Form';


describe("AppComponent", () => {
    it("should render App componenet", () => {
      const wrapper = shallow(<App />)
      expect(shallow(<Form />).length).toEqual(1);
    });
    
   
});
