import React from 'react';
import {shallow} from 'enzyme';

import AuralStatus from './aural-status';

describe('<AuralStatus />', () => {
    it('renders without crashing', () => {
        shallow(<AuralStatus />);
    });
    it('renders aural status update', () => {
        let testStatus = 'you are listening to a game!';
        let wrapper = shallow(<AuralStatus auralStatus={testStatus} />);

        expect(wrapper.contains(testStatus)).toEqual(true);
    });
});
