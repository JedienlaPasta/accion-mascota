'use client';

import React from 'react';
import { AuthProvider } from '../_lib/AuthContext';
import { Header } from '../ui/Header';
import { Footer } from '../ui/Footer';
import { PortalSidebar } from '../ui/portal/PortalSidebar';

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex flex-1">
          <PortalSidebar />
          <main className="min-h-[90svh] flex-1">{children}</main>
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}
