import React from "react";
import { shallow, mount} from 'enzyme/build';
import Home from './Home';

describe('<Home />', () => {
	const history = { push: jest.fn() };

	it('should render a start game text', () => {
		const wrapper = shallow(<Home />);
		expect(wrapper.text()).toEqual('Start Game');
	});

	it("should redirect to the first player's page", () => {
		const wrapper = mount(<Home history={history}/>);

		wrapper.find('button').simulate('click');

		expect(history.push).toHaveBeenCalledWith('/players/1');
	});
});