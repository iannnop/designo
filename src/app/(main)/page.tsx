import { Metadata } from "next"

export const metadata: Metadata = {
  title: "MyApp",
  description: "description"
}

const MyApp = () => {
  return (
      <>
        <h1>MyAppPage</h1>
      </>
  )
}

export default MyApp