import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props shiuld be in state', () => {
        const Component = create(<ProfileStatus status='it-Be'/>);
        const instance = Component.getInstance();
        expect(instance.state.status).toBe('it-Be');
    });
    test('after creation, <span> should be displayed', () => {
        const Component = create(<ProfileStatus status='it-Be'/>);
        const root = Component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull();
    });
    test('after creation, <input> should not be displayed', () => {
        const Component = create(<ProfileStatus status='it-Be'/>);
        const root = Component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });
    test('after creation, <span> should contains correct status', () => {
        const Component = create(<ProfileStatus status='it-Be'/>);
        const root = Component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('it-Be');
    });
    test('input should be dispay in editMode instead of span', () => {
        const Component = create(<ProfileStatus status='it-Be'/>);
        const root = Component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe('it-Be');
    });
    test('callback should be called', () => {
        const mockCallback = jest.fn();
        const Component = create(<ProfileStatus status='it-Be' updateStatus={mockCallback}/>);
        const instance = Component.getInstance();
        instance.deActivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});