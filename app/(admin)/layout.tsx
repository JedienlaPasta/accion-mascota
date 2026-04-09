'use client';

import React from 'react';
import { AuthProvider } from '../_lib/AuthContext';
// import { Header } from '../ui/Header';
import { AdminSidebar } from '../ui/admin/AdminSidebar';
import { SessionHeader } from '../ui/SessionHeader';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="flex min-h-screen flex-col">
        <SessionHeader />
        <div className="flex flex-1">
          <AdminSidebar />
          <main className="min-h-[90svh] flex-1">{children}</main>
        </div>
      </div>
    </AuthProvider>
  );
}
