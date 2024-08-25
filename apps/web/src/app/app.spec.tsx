import { render, waitFor } from '@testing-library/react';

import App from './app';

describe('App', () => {
  it('should render successfully', async () => {
    const { baseElement } = render(<App />);
    await waitFor(() => expect(baseElement).toBeTruthy());
  });

  it('should have a greeting as the title', async () => {
    const { getByText } = render(<App />);
    await waitFor(() => expect(getByText(/It takes a village/i)).toBeTruthy());
  });
});
