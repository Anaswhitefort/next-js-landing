'use client'

import BButton from "@/components/bulma/BButton";
import ApplicationLayout from "@/components/layout/ApplicationLayout";
import { routes } from "../routes";
import { EmailPasswordCredentials } from "@/components/auth/generic";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { firebase } from "@/components/firebase/setup";
import { redirect } from 'next/navigation'

export default function Signup() {
  const [credentials, setCredentials] = useState<EmailPasswordCredentials>({email: '', password: ''});
  const [loggedInUser, isLoading] = useAuthState(getAuth(firebase));
  const [createUserWithEmailAndPassword, _user, loading, signupError] = useCreateUserWithEmailAndPassword(getAuth(firebase));
  const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(getAuth(firebase))

  const getHandler = (name: keyof EmailPasswordCredentials) => {
    return (event: ChangeEvent<HTMLInputElement>) => {
      setCredentials({ ...credentials, [name]: event.target.value })
    }
  };

  useEffect(() => {
    if (loggedInUser) {
      redirect(routes.home.url);
    }
  }, [loggedInUser, isLoading])

  const onClickRegister = async function (event: MouseEvent) {
    await createUserWithEmailAndPassword(credentials.email, credentials.password);

    sendEmailVerification();
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

                    { signupError &&
                      <div className="message is-danger">
                        <div className="message-body">
                          { signupError.message }
                        </div>
                      </div>
                    }

                    <div className="buttons">
                      <BButton className="is-primary is-fullwidth" loading={loading} onClick={onClickRegister}>
                        { "Register" }
                      </BButton>
                    </div>

                    <div className="has-text-centered">
                      <a href={routes.login.url}>I already have an account</a>
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
  );
}
