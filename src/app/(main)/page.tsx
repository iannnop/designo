import AboutUs from "@modules/home/components/about-us"
import FeaturedProjects from "@modules/home/components/featured-projects"
import Hero from "@modules/home/components/hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Designo",
  description: "description"
}

const Home = () => {
  return (
      <>
        <Hero />
        <FeaturedProjects />
        <AboutUs />
      </>
      
  )
}

export default Home