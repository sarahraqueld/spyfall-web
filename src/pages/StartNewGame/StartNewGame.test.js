import React from "react";
import { shallow } from 'enzyme/build';
import StartNewGame from "./StartNewGame";

describe('<StartNewGame />', () => {
	const history = { push: jest.fn() };

	it("should redirect to the start game page", () => {
		const wrapper = shallow(<StartNewGame history={history}/>);

		wrapper.find('button').simulate('click');

		expect(history.push).toHaveBeenCalledWith('/games/start');
	});
});