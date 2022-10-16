/* eslint-disable @typescript-eslint/no-non-null-assertion */
import './index.scss';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>
);
