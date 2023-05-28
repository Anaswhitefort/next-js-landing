import ApplicationNavBar from "@/components/navbars/ApplicationNavBar"

export default function ApplicationLayout({children}) {
  return(
    <>
      <ApplicationNavBar />
      <div>
        {children}
      </div>
    </>
  )
}
