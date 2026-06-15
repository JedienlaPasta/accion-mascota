import NextAuth from 'next-auth';
import Keycloak from 'next-auth/providers/keycloak';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Keycloak({
      clientId: process.env.AUTH_KEYCLOAK_ID,
      clientSecret: process.env.AUTH_KEYCLOAK_SECRET,
      issuer: process.env.AUTH_KEYCLOAK_ISSUER,
    }),
  ],
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        const keycloakProfile = profile as {
          realm_access?: { roles: string[] };
        };
        token.roles = keycloakProfile.realm_access?.roles || [];
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
  debug: process.env.NODE_ENV === 'development',
});
