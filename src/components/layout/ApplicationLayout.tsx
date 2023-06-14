import ApplicationNavBar from "@/components/navbars/ApplicationNavBar"
import { getServerSession } from "next-auth"

export default async function ApplicationLayout({children}) {
  const session = await getServerSession();

  return(
    <>
      <ApplicationNavBar user={session?.user} />
      <div className="container">
        {children}
      </div>
    </>
  )
}
