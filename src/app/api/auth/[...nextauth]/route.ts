import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: "9319eb2a5af24db9b59b",
      clientSecret: "51aa491a90c32c08cc1995291f72ae250a53f103"
    })
  ] 
});

export { handler as GET, handler as POST};
