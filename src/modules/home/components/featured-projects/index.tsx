import UnderlineLink from "@modules/common/components/underline-link"
import Link from "next/link"

const FeaturedProjects = () => {
  return (
    <div className="px-6 pt-[120px] grid gap-y-6">
      <Link href='web-design'>
        <div className="relative">
          <div className="bg-webDesign bg-cover w-full h-full absolute rounded-2xl -z-10"/>
          <div className="py-[90px] text-white bg-[#000000]/50 rounded-2xl text-center uppercase tracking-wider">
            <h2 className="pb-3 text-3xl">Web Design</h2>
            <UnderlineLink>View projects</UnderlineLink>
          </div>
        </div>
      </Link>
      <Link href='app-design'>
        <div className="relative">
          <div className="bg-appDesign bg-cover w-full h-full absolute rounded-2xl -z-10"/>
          <div className="py-[90px] text-white bg-[#000000]/50 rounded-2xl text-center uppercase tracking-wider">
            <h2 className="pb-3 text-3xl">App Design</h2>
            <UnderlineLink>View projects</UnderlineLink>
          </div>
        </div>
      </Link>
      <Link href='graphic-design'>
        <div className="relative">
          <div className="bg-graphicDesign bg-cover w-full h-full absolute rounded-2xl -z-10"/>
          <div className="py-[90px] text-white bg-[#000000]/50 rounded-2xl text-center uppercase tracking-wider">
            <h2 className="pb-3 text-3xl leading-9">Graphic Design</h2>
            <UnderlineLink>View projects</UnderlineLink>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FeaturedProjects
