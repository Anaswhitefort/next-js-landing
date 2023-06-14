'use client';

import { signIn, signOut, useSession } from "next-auth/react";

export function SignInNavbarItem() {
  const onSignIn = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    signIn();
  };

  return (
    <a href="" onClick={onSignIn} className="navbar-item">
      { "Sign in" }
    </a>
  )
}

export function SignOutNavbarItem() {
  const onSignOut = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    signOut();
  };

  return (
    <a className="navbar-item" href="" onClick={onSignOut}> 
      { "Log out" }
    </a>
  )
}

