import dynamic from 'next/dynamic'

const Accordions = dynamic(() => import('@/components/home/Accordions'))

function FAQ() {
  return (
    <div className="laptop:mt-30 desktop:mt-37.5 safe-area mt-20">
      <div className="laptop:flex items-center justify-between">
        <div>
          <h2 className="title">Frequently Asked Questions</h2>
          <p className="description desktop:mt-3.5 mt-2.5">
            Got questions? We've got answers! Check out our FAQ section to find
            answers to the most common questions about StreamVibe.
          </p>
        </div>
        <button type="button" className="button laptop:mt-0 mt-5">
          <p className="desktop:text-lg text-sm font-semibold">
            Ask a Question
          </p>
        </button>
      </div>
      <Accordions />
    </div>
  )
}

export default FAQ
