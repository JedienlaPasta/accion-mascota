'use client';

import React from 'react';
import { AuthProvider } from '../_lib/AuthContext';
// import { Footer } from '../ui/Footer';
import { PortalSidebar } from '../ui/portal/PortalSidebar';
import { SessionHeader } from '../ui/SessionHeader';

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        <SessionHeader />
        <div className="flex flex-1">
          <PortalSidebar />
          <main className="flex-1">{children}</main>
        </div>
        {/* <Footer /> */}
      </div>
    </AuthProvider>
  );
}
