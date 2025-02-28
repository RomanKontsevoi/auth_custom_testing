import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import { NextAuthOptions } from 'next-auth'

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID!,
      clientSecret: process.env.APPLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log('SignIn Callback', { user, account, profile, email, credentials });
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log('Redirect Callback', { url, baseUrl });
      return url.startsWith(baseUrl) ? url : baseUrl;
    },
    async session({ session, user, token }) {
      console.log('Session Callback', { session, user, token });
      return session;
    },
    async jwt({ token, user, account, profile }) {
      console.log('JWT Callback', { token, user, account, profile });
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
