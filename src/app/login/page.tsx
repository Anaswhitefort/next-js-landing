'use client'

import ApplicationLayout from "@/components/layout/ApplicationLayout"
import {routes} from '@/app/routes'
import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from "firebase/auth";
import { firebase } from "@/components/firebase/setup";
import { EmailPasswordCredentials } from "@/components/auth/generic";
import { redirect } from 'next/navigation'
import BButton from "@/components/bulma/BButton";

export default function Login() {
  const [credentials, setCredentials] = useState<EmailPasswordCredentials>({email: '', password: ''});
  const [loggedInUser, isLoading] = useAuthState(getAuth(firebase));
  const [signInWithEmailAndPassword, _user, loading, error] = useSignInWithEmailAndPassword(getAuth(firebase));

  useEffect(() => {
    if (loggedInUser) {
      redirect(routes.home.url);
    }
  }, [loggedInUser, isLoading])

  const getHandler = (name: keyof EmailPasswordCredentials) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setCredentials({ ...credentials, [name]: event.target.value })
    }
  }

  const onClickLogin = function (event: MouseEvent) {
    signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  return (
    <ApplicationLayout>
      <div className="container">
        <div className="section">
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child"></div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child">
                <div className="card">
                  <div className="card-content">
                    <div className="field">
                      <label className="label">Email</label>
                      <div className="control">
                        <input className="input" type="text" placeholder="Enter your email" onChange={getHandler('email')} />
                      </div>
                    </div>

                    <div className="field">
                      <label className="label">Password</label>
                      <div className="control">
                        <input className="input" type="password" placeholder="Enter your password" onChange={getHandler('password')} />
                      </div>
                    </div>

                    <br />

                    <div className="buttons">
                      <BButton className="is-primary is-fullwidth" loading={loading} onClick={onClickLogin}>
                        { "Login" }
                      </BButton>
                    </div>

                    <div className="has-text-centered">
                      <a href={routes.forgotPassword.url}>Forgot my password</a>
                      <span> • </span>
                      <a href={routes.signup.url}>Create an account</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child"></div>
            </div>
          </div>
        </div>
      </div>
    </ApplicationLayout>
  )
}

