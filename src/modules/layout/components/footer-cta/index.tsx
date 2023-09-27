import Button from "@modules/common/components/button"

const FooterCTA = () => {
  return (
    <div className="px-6 bg-blackwhite text-white">
      <div className="bg-peach px-6 py-16 bg-footerCTA bg-cover text-center rounded-2xl">
        <div className="">
          <h3 className="pb-4 text-4xl tracking-normal">Let&apos;s talk about your project</h3>
          <p className="pb-8 leading-7">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
          <div className="flex justify-center items-center">
            <Button variant="secondary">Get in touch</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
