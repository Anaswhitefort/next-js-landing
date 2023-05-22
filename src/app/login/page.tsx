'use client'

import { Card } from "primereact/card"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"

export default function Login() {
  return (
    <div className="flex justify-content-center">
    <Card>
      <div className="flex flex-column gap-2 mb-5"> 
        <label htmlFor="Email Address">Email Address</label>
        <InputText id="email" aria-describedby="email-help" />
      </div>

      <div className="flex flex-column gap-2 mb-5"> 
        <label htmlFor="password">Password</label>
        <InputText id="password" />
      </div>

      <div className="mb-3">
        <Button className="w-full">Login</Button>
      </div>

      <div>
        <Button label="Forgot password" link />
      </div>

      <div>
        <span>Don't have an account?</span>
        <Button label="Sign Up" link />
      </div>
    </Card>
    </div>
  )
}
