import Hero from "@modules/common/components/hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Web Design",
  description: "description"
}

const WebDesign = () => {
  return (
      <>
        <Hero heading="Web Design" body="We build websites that serve as powerful marketing tools and bring memorable brand experiences."/>
      </>
  )
}

export default WebDesign