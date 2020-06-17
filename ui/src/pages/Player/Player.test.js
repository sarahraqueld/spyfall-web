import { shallow } from 'enzyme/build';
import React from "react";
import Player from './Player';

describe('Player', () => {
    it('does not reveal the player role by default', () => {
        const wrapper = shallow(<Player/>);

        expect(wrapper.text()).not.toContain('Location');
    });

    it('reveals the player role', () => {
        const wrapper = shallow(<Player/>);

        wrapper.find('#reveal').simulate('click');

        expect(wrapper.text()).toContain('Location');
    });
});