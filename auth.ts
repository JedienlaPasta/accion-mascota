import NextAuth from 'next-auth';
import { AdapterSession } from 'next-auth/adapters';
import { JWT } from 'next-auth/jwt';
import Keycloak from 'next-auth/providers/keycloak';

function buildKeycloakLogoutUrl(idToken: string): string {
  const issuer = process.env.AUTH_KEYCLOAK_ISSUER;
  const postLogoutUri = encodeURIComponent(process.env.AUTH_URL!);
  return `${issuer}/protocol/openid-connect/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${postLogoutUri}`;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Keycloak({
      clientId: process.env.AUTH_KEYCLOAK_ID,
      clientSecret: process.env.AUTH_KEYCLOAK_SECRET,
      issuer: process.env.AUTH_KEYCLOAK_ISSUER,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account) {
        token.idToken = account.id_token;
      }
      if (profile) {
        const keycloakProfile = profile as {
          realm_access?: { roles: string[] };
        };
        token.roles = keycloakProfile.realm_access?.roles || [];
      }
      if (!token.roles) {
        token.roles = [];
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.roles = token.roles;
      }
      return session;
    },
  },
  events: {
    async signOut(
      message:
        | { session: void | AdapterSession | null | undefined }
        | { token: JWT | null }
    ) {
      const idToken = 'token' in message ? message.token?.idToken : undefined;
      if (idToken) {
        const logoutUrl = buildKeycloakLogoutUrl(idToken);
        await fetch(logoutUrl);
      }
    },
  },
  session: {
    strategy: 'jwt',
    maxAge: 10 * 60 * 60, // 10 horas
  },
  pages: {
    error: '/auth/error',
  },
});
