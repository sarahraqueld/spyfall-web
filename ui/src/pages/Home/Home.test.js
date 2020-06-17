import React from "react";
import { shallow } from 'enzyme/build';
import Home from './Home';

describe('<Home />', () => {
	it('should render a start game text', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper.text()).toEqual('Start Game');
	});
});