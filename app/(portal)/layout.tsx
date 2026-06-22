import { auth } from '@/auth';
import { PortalSidebar } from '../ui/portal/PortalSidebar';
import { SessionHeader } from '../ui/SessionHeader';
// import { SessionProvider } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen flex-col bg-gray-100">
      <SessionHeader />
      <div className="flex flex-1">
        <PortalSidebar />
        <main className="flex-1">{children}</main>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
