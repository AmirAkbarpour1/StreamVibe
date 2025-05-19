import ctaBackground from '@/assets/images/cta-background.webp'

function CTA() {
  return (
    <div className="safe-area laptop:mt-30 desktop:mt-37.5 mt-20 mb-10">
      <div
        className="border-black-15 desktop:py-25 desktop:px-20 laptop:py-20 laptop:px-15 laptop:flex-row laptop:rounded-xl relative flex w-full flex-col items-center justify-between overflow-hidden rounded-lg border bg-cover bg-center px-7.5 py-12.5"
        style={{
          backgroundImage: `url(${ctaBackground.src})`,
        }}
      >
        <div className="relative">
          <h2 className="title text-center">Start your free trial today!</h2>
          <p className="description desktop:mt-3.5 mt-2.5 text-center">
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>
        <button type="button" className="button laptop:mt-0 relative mt-12.5">
          Start a Free Trail
        </button>
      </div>
    </div>
  )
}

export default CTA
