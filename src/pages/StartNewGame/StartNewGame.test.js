import React from "react";
import { shallow } from 'enzyme/build';
import StartNewGame from "./StartNewGame";

describe('<StartNewGame />', () => {
	const history = { push: jest.fn() };

	it("should redirect to another page", () => {
		const wrapper = shallow(<StartNewGame history={history}/>);

		wrapper.find('button').simulate('click');

		expect(history.push).toHaveBeenCalled();
	});
});