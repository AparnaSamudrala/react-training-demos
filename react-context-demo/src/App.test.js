import { render, screen } from '@testing-library/react';
//import App from './App';
import About from './components/About';

test('renders learn react link', () => {
  render(<About />);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});
