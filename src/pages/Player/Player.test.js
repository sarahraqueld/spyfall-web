import { shallow } from 'enzyme/build';
import React from "react";
import Player from './Player';

describe('<Player />', () => {
    const spyPlayer = {
        spy: true
    }
    const regularPlayer = {
        spy:false,
        location: "Submarine"
    }

    it('does not reveal the player location or role by default', () => {
        const wrapperRegular = shallow(<Player {...regularPlayer} />);
        const wrapperSpy = shallow(<Player {...spyPlayer} />);

        expect(wrapperRegular.text()).not.toContain('Location');
        expect(wrapperSpy.text()).not.toContain('Spy');
    });


    describe('with a regular player', () => {
        it('reveals the player location', () => {
            const wrapper = shallow(<Player {...regularPlayer}/>);
    
            wrapper.find('#reveal').simulate('click');
    
            expect(wrapper.text()).toContain('Location: Submarine');
            expect(wrapper.text()).not.toContain('Spy');
        });
    });

    describe('with a spy player', () => {
        it('reveals it is a spy and does not tell a location', () => {
            const wrapper = shallow(<Player {...spyPlayer}/>);
    
            wrapper.find('#reveal').simulate('click');
    
            expect(wrapper.text()).toContain('Spy');
            expect(wrapper.text()).not.toContain('Location');
        });
    });
});