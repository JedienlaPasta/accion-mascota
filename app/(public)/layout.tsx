'use client';

import React from 'react';
import { AuthProvider } from '../_lib/AuthContext';
import { Header } from '../ui/Header';
import { Footer } from '../ui/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
