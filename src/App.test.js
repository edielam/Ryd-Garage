import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import TestRenderer from 'react-test-renderer';
import AddCar from './components/addCar';


test('open add car modal form', () => {
  render(<App/>);
  fireEvent.click(screen.getByText('New Car'));
  expect(screen.getByRole('dialog')).toHaveTextContent
  ('New Car');
});

test('render a snapshot', () => {
  const tree = TestRenderer.create(<AddCar/>).toJSON();
  expect(tree).toMatchSnapshot();
});