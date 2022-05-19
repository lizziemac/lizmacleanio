/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Pages from './';

describe('Pages component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  const history = createMemoryHistory();

  it('displays loader when lazy', async () => {
    render(
      <Router location={history.location} navigator={history} navigationType={history.action}>
        <Pages toggleTheme={function (): void { return null; } } />
      </Router>,
    );

    const lazyElement = await screen.findByText(/please wait/i);
    expect(lazyElement).toBeInTheDocument();
  });

  it('displays "Welcome!" on Home page lazily', async () => {
    render(
      <Router location={history.location} navigator={history} navigationType={history.action}>
        <Pages toggleTheme={function (): void { return null; } } />
      </Router>,
    );

    const fallbackLoader = await screen.findByText(/please wait/i);
    expect(fallbackLoader).toBeInTheDocument();
    jest.runAllTimers();

    const lazyElement = await screen.findByText('Welcome!');
    expect(lazyElement).toBeInTheDocument();
  });

  it('displays "About Me" on Home page', async () => {
    history.push('/about');
    render(
      <Router location={history.location} navigator={history} navigationType={history.action}>
        <Pages toggleTheme={function (): void { return null; } } />
      </Router>,
    );

    const fallbackLoader = await screen.findByText(/please wait/i);
    expect(fallbackLoader).toBeInTheDocument();
    jest.runAllTimers();

    const lazyElement = await screen.findByText('About Me');
    expect(lazyElement).toBeInTheDocument();
  });

  it('displays "Oops! Page not found!" when provided an invalid path', async () => {
    history.push('/fake');
    render(
      <Router location={history.location} navigator={history} navigationType={history.action}>
        <Pages toggleTheme={function (): void { return null; } } />
      </Router>,
    );

    const fallbackLoader = await screen.findByText(/please wait/i);
    expect(fallbackLoader).toBeInTheDocument();
    jest.runAllTimers();

    const lazyElement = await screen.findByText('Oops! Page not found!');
    expect(lazyElement).toBeInTheDocument();
  });

  afterEach(cleanup);
});