import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props shiuld be in state', () => {
        const Component = create(<ProfileStatus status='it-Be'/>);
        const instance = Component.getInstance();
        expect(instance.state.status).toBe('it-Be');
    });
});