'use client';

import { signIn } from 'next-auth/react';
import { useEffect, useRef } from 'react';

export function LoginRedirect() {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    (async () => {
      const res = await signIn('keycloak', {
        callbackUrl: '/',
        redirect: false,
      });
      if (res?.url) {
        window.location.replace(res.url);
      }
    })();
  }, []);

  return null;
}
