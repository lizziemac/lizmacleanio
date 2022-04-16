/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Pages from './';

describe('Pages component', () => {
  const history = createMemoryHistory();

  it('displays "Welcome!" on Home page lazily', async () => {
    render(
      <Router location={history.location} navigator={history} navigationType={history.action}>
        <Pages toggleTheme={function (): void { return null; } } />
      </Router>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    const lazyElement = await screen.findByText('Welcome!');
    expect(lazyElement).toBeInTheDocument();
  });

  it('displays "About Liz" on Home page', async () => {
    history.push('/about');
    render(
      <Router location={history.location} navigator={history} navigationType={history.action}>
        <Pages toggleTheme={function (): void { return null; } } />
      </Router>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    const lazyElement = await screen.findByText('About Liz');
    expect(lazyElement).toBeInTheDocument();
  });

  it('displays "Oops! Page not found!" when provided an invalid path', async () => {
    history.push('/fake');
    render(
      <Router location={history.location} navigator={history} navigationType={history.action}>
        <Pages toggleTheme={function (): void { return null; } } />
      </Router>,
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    const lazyElement = await screen.findByText('Oops! Page not found!');
    expect(lazyElement).toBeInTheDocument();
  });

  afterAll(cleanup);
});