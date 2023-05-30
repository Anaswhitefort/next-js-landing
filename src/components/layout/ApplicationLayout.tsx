'use client'

import ApplicationNavBar from "@/components/navbars/ApplicationNavBar"
import { useAuthState } from "react-firebase-hooks/auth"
import { firebase } from "@/components/firebase/setup"
import { getAuth } from "firebase/auth"

export default function ApplicationLayout({children}) {
  const [user, loading, error] = useAuthState(getAuth(firebase))
  return(
    <>
      <ApplicationNavBar user={user} />
      <div className="container">
        {children}
      </div>
    </>
  )
}
