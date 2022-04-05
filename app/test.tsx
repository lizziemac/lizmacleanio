/**
 * @jest-environment jsdom
 */
import { App } from './';
import { render, screen, cleanup } from '@testing-library/react';

describe('App component', () => {
  beforeAll(() => {
    render(<App callback={(): void => {}}/>); // eslint-disable-line  @typescript-eslint/no-empty-function
  });

  it('should say Welcome!', () => {
    const message = 'Welcome!';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  afterAll(cleanup);
});