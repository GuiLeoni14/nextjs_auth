import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { gqlClient } from '../../../graphql/client';
import { AuthenticateUserDocument, AuthenticateUserMutation } from '../../../graphql/generated';

export default NextAuth({
    jwt: {},
    session: {
        strategy: 'jwt',
        maxAge: 7 * 24 * 60 * 60,
    },
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'jsmith' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                if (!credentials || !credentials.password || !credentials.email) return null;
                try {
                    const { login } = await gqlClient.request<AuthenticateUserMutation>(AuthenticateUserDocument, {
                        identifier: credentials.email,
                        password: credentials.password,
                    });
                    const { jwt, user } = login;
                    const { id, username, email } = user;
                    if (!jwt || !id || !username || !email) {
                        return null;
                    }
                    return {
                        jwt,
                        id,
                        name: username,
                        email,
                    };
                } catch (error) {
                    console.log(error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async session({ session, user, token }) {
            session.user = {
                name: token.name,
                email: token.email,
            };
            if (token) {
                session.accessToken = token.jwt;
            }
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            const isSingIn = !!user;
            const actualDateInSeconds = Math.floor(Date.now() / 1000);
            const tokenExpirationInSeconds = Math.floor(7 * 24 * 60 * 60); // mesmo tempo do token do strapi
            if (isSingIn) {
                console.log(user);
                if (!user || !user.jwt || !user.email || !user.id) {
                    return {};
                }
                token.jwt = user.jwt;
                token.name = user.name;
                token.id = user.id;
                token.email = user.email;
                token.expiration = Math.floor(actualDateInSeconds + tokenExpirationInSeconds) as number;
            } else {
                if (!token.expiration) return {};
                const expiration = token.expiration as number;
                if (actualDateInSeconds > expiration) return {};
            }
            return token;
        },
    },
});
