import Image from "next/image"

const AboutUs = () => {
  return (
    <div className="px-6 py-[120px] flex flex-col gap-y-20">
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute w-full h-[202px] -z-10 bg-smallCircle">
          </div>
          <Image className=""
            src="/assets/home/desktop/illustration-passionate.svg"
            alt="illustration of passionate graphic designer"
            width={202}
            height={202}
          />
        </div>
        <div className="">
          <h3 className="pt-12 pb-8 uppercase tracking-[5px]">Passionate</h3>
          <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions</p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute w-full h-full -z-10 bg-smallCircle transform -rotate-90" />
          <Image className=""
            src="/assets/home/desktop/illustration-resourceful.svg"
            alt="illustration of passionate resourceful designer"
            width={202}
            height={202}
          />
        </div>
        <div>          
          <h3 className="pt-12 pb-8 uppercase tracking-[5px]">Resourceful</h3>
          <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients&apos; needs.</p>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute w-full h-full -z-10 bg-smallCircle transform rotate-90" />
          <Image className=""
            src="/assets/home/desktop/illustration-friendly.svg"
            alt="illustration of passionate friendly designer"
            width={202}
            height={202}
          />
        </div>
        <div>
          <h3 className="pt-12 pb-8 uppercase tracking-[5px]">Friendly</h3>
          <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
