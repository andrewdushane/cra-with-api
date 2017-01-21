import React from 'react';
import renderer from 'react-test-renderer';
import MockProvider from '../../__test_env__/MockProvider';
import { Container } from '../Container';

const loadMessage = jest.fn();

test('renders', () => {
  const component = renderer.create(
    <MockProvider>
      <Container loadMessage={loadMessage} />
    </MockProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders message', () => {
  const component = renderer.create(
    <MockProvider>
      <Container message="Test message" />
    </MockProvider>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
