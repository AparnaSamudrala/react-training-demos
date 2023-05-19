import { render, screen } from '@testing-library/react';
import App from './App';

/* test('render super arithmetic calculator', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */


describe('App', () => {
  it('renders App component', () => {
    render(<App />);

    expect(doCalculation(2,4,"+")).toBe(6);
  });
});
