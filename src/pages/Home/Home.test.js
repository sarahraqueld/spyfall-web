import React from "react";
import { shallow, mount} from 'enzyme/build';
import Home from './Home';

describe('<Home />', () => {
	const history = { push: jest.fn() };

	it("should redirect to the start game page", () => {
		const wrapper = mount(<Home history={history}/>);

		wrapper.find('#start-game').simulate('click');

		expect(history.push).toHaveBeenCalledWith('/games/new');
	});


	it("should redirect to the join game page", () => {
		const wrapper = mount(<Home history={history}/>);

		wrapper.find('#join-game').simulate('click');

		expect(history.push).toHaveBeenCalledWith('/games/join');
	});

});