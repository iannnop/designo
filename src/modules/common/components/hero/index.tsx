type HeroProps = {
  heading: string,
  body: string
}

const Hero = ({ heading, body }: HeroProps) => {
  return (
    <div className="text-center bg-peach text-white bg-mobileHero bg-no-repeat bg-right overflow-hidden">
      <div className="px-6 py-[105px]">
        <h1 className="text-3xl">{ heading }</h1>
        <p className="leading-8 text-[15px] pt-6">{ body }</p>
      </div>
    </div>
  )
}

export default Hero
