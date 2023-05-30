'use client'

import { routes } from "@/app/routes";
import { User } from "@/app/user";
import BNavBar, { BNavBarProps } from "@/components/bulma/BNavBar";
import { getAuth } from "firebase/auth";
import { useSignOut } from 'react-firebase-hooks/auth'
import { firebase } from "../firebase/setup";
import { redirect } from "next/navigation";
import { MouseEvent, useEffect } from "react";

export type UserNavBarProps = {
  user: User
} & Pick<BNavBarProps, "navbarBrand"> 

export default function UserNavBar(props: UserNavBarProps) {
  const [signOut, loading, error] = useSignOut(getAuth(firebase));

  const signOutHandler = async (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    signOut();
  }

  useEffect(() => {
    if (loading) {
      redirect(routes.landing.url);
    }
  }, [loading])

  const navbarStart = (
    <>
      <a className="navbar-item">
        Home
      </a>

      <a className="navbar-item">
        Documentation
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          More
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider" />
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </>
  );
  const navbarEnd = (
    <div className="navbar-item has-dropdown is-hoverable">
      <a className="navbar-link">
        { props.user.email }
      </a>

      <div className="navbar-dropdown">
        <a className="navbar-item" href={routes.profile.url}>
          { "My Profile" }
        </a>
        <a className="navbar-item" href="#" onClick={signOutHandler}> 
          { "Log out" }
        </a>
      </div>
    </div>
  )
  return (
    <BNavBar className="is-primary" navbarBrand={props.navbarBrand} navbarStart={navbarStart} navbarEnd={navbarEnd} />
  );
}
