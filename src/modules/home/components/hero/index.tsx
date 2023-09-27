import Button from "@modules/common/components/button"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="text-center bg-peach text-white bg-mobileHomeHero bg-cover overflow-hidden">
      <div className="px-6 pt-20">
        <h1 className="text-3xl">Award-winning custom designs and digital branding solutions</h1>
        <p className="leading-8 text-[15px] pt-4 pb-6">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services</p>
        <div className="flex justify-center items-center">
          <Button variant="secondary">Learn more</Button>
        </div>
      </div>
      <div className="flex justify-center overflow-hidden">
        <Image src="/assets/home/desktop/image-hero-phone.png"
          className="transform translate-y-1/3 scale-[2] w-auto h-auto"
          alt="hero phone image"
          width={284}
          height={573}
        />
      </div>
    </div>
  )
}

export default Hero
