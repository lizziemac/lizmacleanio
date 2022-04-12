/**
 * @jest-environment jsdom
 */
import { render, screen, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Pages from './';

describe('Pages component', () => {
  const history = createMemoryHistory();

  it('displays "Welcome!" on Home page', () => {
    render(
      <Router location={history.location} navigator={history} navigationType={history.action}>
        <Pages toggleTheme={function (): void { return null; } } />
      </Router>,
    );

    expect(screen.getByText('Welcome!')).toBeInTheDocument();
  });

  it('displays "About Liz" on Home page', () => {
    history.push('/about');
    render(
      <Router location={history.location} navigator={history} navigationType={history.action}>
        <Pages toggleTheme={function (): void { return null; } } />
      </Router>,
    );

    expect(screen.getByText('About Liz')).toBeInTheDocument();
  });

  it('displays "Oops! Page not found!" when provided an invalid path', () => {
    history.push('/fake');
    render(
      <Router location={history.location} navigator={history} navigationType={history.action}>
        <Pages toggleTheme={function (): void { return null; } } />
      </Router>,
    );

    expect(screen.getByText('Oops! Page not found!')).toBeInTheDocument();
  });

  afterAll(cleanup);
});