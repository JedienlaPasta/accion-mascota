'use client';

import React from 'react';
import { AdminSidebar } from '../ui/admin/AdminSidebar';
import { SessionHeader } from '../ui/SessionHeader';
import { SessionProvider } from 'next-auth/react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="flex min-h-dvh flex-col">
        <SessionHeader />
        <div className="flex flex-1 overflow-hidden">
          <AdminSidebar />
          <main
            id="main-scroll"
            className="min-h-0 w-full flex-1 overflow-auto"
          >
            {children}
          </main>
        </div>
      </div>
    </SessionProvider>
  );
}
