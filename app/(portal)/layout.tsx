'use client';

import React from 'react';
// import { Footer } from '../ui/Footer';
import { PortalSidebar } from '../ui/portal/PortalSidebar';
import { SessionHeader } from '../ui/SessionHeader';
import { SessionProvider } from 'next-auth/react';

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="flex min-h-screen flex-col">
        <SessionHeader />
        <div className="flex flex-1">
          <PortalSidebar />
          <main className="flex-1">{children}</main>
        </div>
        {/* <Footer /> */}
      </div>
    </SessionProvider>
  );
}
