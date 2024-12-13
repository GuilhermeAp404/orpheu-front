import NextAuth, { AuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";



export const authOptions:AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text"},
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const res = await fetch("http://localhost:8080/auth/login", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                })

                const data = await res.json()
                
                if (res.ok && data.token) {
                    return data
                }

                return null
            }
        },)
    ],
    pages:{
        signIn:'/'
    },
    callbacks: {
        async jwt({ token, user}){
            if(user){
                token.user=user
            }
            return token
        },
        async session({session, token}){
            session.user = token.user as any
            return session
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };