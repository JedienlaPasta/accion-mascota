'use client';

import React from 'react';
import { Header } from '../ui/Header';
import { Footer } from '../ui/Footer';
import { SessionProvider } from 'next-auth/react';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </SessionProvider>
  );
}
