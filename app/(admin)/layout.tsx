'use client';

import React from 'react';
import { AuthProvider } from '../_lib/AuthContext';
import { AdminSidebar } from '../ui/admin/AdminSidebar';
import { SessionHeader } from '../ui/SessionHeader';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex max-h-screen flex-col">
        <SessionHeader />
        <div className="flex flex-1 overflow-hidden">
          <AdminSidebar />
          <main id="main-scroll" className="flex-1s w-full overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
}
