import { auth } from '@/auth';
import { AdminSidebar } from '../ui/admin/AdminSidebar';
import { SessionHeader } from '../ui/SessionHeader';
// import { SessionProvider } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect('/');
  }

  const roles = session.user?.roles || [];
  if (!roles.includes('Administrador')) {
    redirect('/');
  }

  return (
    <div className="flex min-h-dvh flex-col bg-gray-100">
      <SessionHeader />
      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar />
        <main id="main-scroll" className="min-h-0 w-full flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
