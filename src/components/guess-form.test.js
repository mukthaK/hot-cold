import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('renders without crashing', () => {
        shallow(<GuessForm />);
    });
    it('should  make guess on submitting the form', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess={callback} />);
        const value = 10;
        wrapper.find('input[type="number"]').instance().value = value;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(value.toString());
    });
});
