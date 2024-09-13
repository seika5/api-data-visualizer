"use client";

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import '../styles/globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}