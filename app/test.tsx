/**
 * @jest-environment jsdom
 */
import { App } from './';
import { render, screen, cleanup } from '@testing-library/react';

describe('App component', () => {

  it('should load lazily', async () => {
    render(<App callback={(): void => {}}/>); // eslint-disable-line  @typescript-eslint/no-empty-function
    const message = 'Welcome!';

    const lazyLoader = await screen.findByText(/please wait/i);
    expect(lazyLoader).toBeInTheDocument();

    expect(await screen.findByText(message)).toBeInTheDocument();
  });

  afterAll(cleanup);
});